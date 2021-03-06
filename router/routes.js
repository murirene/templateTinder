"use strict";

let express = require('express');
let router = express.Router();
let _ = require('lodash');

router.use( (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

/* Create a Repo */
router.post('/', (req, res) => {
    let repos = req.db.get('repos');
    let repo = req.body;

    repo.issues = [];

    repos.insert(repo, (err, doc) => {
        if(err){
            return res.send(409, 'Failed to create repo');
        }

        res.json(doc);
    });
})

/* Create an issue for a Repo */
router.post('/:id/issues', (req, res) => {
    let repos = req.db.get('repos');
    repos.find({ _id: req.params.id }, (err, doc) => {
        let issue = req.body;
        let repo = !err? []: doc[0];

        if(err){
            return res.send(409, `Failed to create issue. could not find repo ${req.params.id}`);
        }

        issue.comments = [];
        issue.status = 0;

        issue._id = !repo.issues? 1: repo.issues.length + 1;

        repo.issues = !repo.issues? [issue]: [...repo.issues, issue];
        repos.update({ _id: req.params.id }, {$set: {issues: repo.issues}}, {$currentDate: { lastModified: true }},
            (err, doc) => {
                if(err){
                    return res.send(409, `Failed to create issue for repo ${req.params.id}`);
                }

                res.json({ records: doc });
            }
        );
    });
})

/* Create a comment to an issues for a Repo */
router.post('/:id/issues/:issueId/comments', (req, res) => {
    let repos = req.db.get('repos');
    repos.find({ _id: req.params.id }, (err, doc) => {
        let repo = doc[0];
        let comment = req.body;
        let index = _.findIndex(repo.issues, (o) => {
            return `${o._id}` === req.params.issueId
        });

        if(index === -1){
            return res.send(409, `Failed to add comment, issue ${req.params.issueId} not found for repo ${req.params.id}`);
        }

        repo.issues[index].comments = !repo.issues && !repo.issues[index].comments? [comment]: [...repo.issues[index].comments, comment];

        repos.update({ _id: req.params.id }, {$set: {issues: repo.issues}}, {$currentDate: { lastModified: true }},
            (err, doc) => {
                if(err){
                    return res.send(409, `Failed to add comment to issue ${req.params.issueId} for repo ${req.params.id}`);
                }

                res.json({ records: doc });
            }
        );

    });
})

/* Retrieve the of issues for a Repo */
router.get('/:id/issues', (req, res) => {
    let repos = req.db.get('repos');
    repos.find({ _id: req.params.id }, (err, doc) => {
            if(err){
                return res.send(409, `Failed to retrieve issues for repo ${req.params.id}`);
            }

            res.json({ issues: doc });
        }
    );
})

/* Retrieve the comments for an issue */
/*router.get('/:id/issues/:issueId/comments', (req, res) => {
    let repos = req.db.get('repos');
    repos.find({ _id: req.params.id }, (err, doc) => {
        let repo = doc[0];
        let index = _.findIndex(repo.issues, (o) => {
            return `${o._id}` === req.params.issueId
        });

        if(index === -1){
            return res.send(409, `Failed to add comment, issue ${req.params.issueId} not found for repo ${req.params.id}`);
        }

        res.json(comments: repo.issues.comments);

    });
})*/

module.exports = router;
