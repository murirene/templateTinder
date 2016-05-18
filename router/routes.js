"use strict";

let express = require('express');
let router = express.Router();

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
    let repo = repos.find({ _id: req.params.id });
    let issue = req.body;

    issue.comments = [];

    repo.issues = !repo.issues? [issue]: [...repo.issues, issue];
    repos.update({ _id: req.params.id }, {$set: {issues: repo.issues}}, {$currentDate: { lastModified: true }},
        (err, doc) => {
            if(err){
                return res.send(409, `Failed to create issue for repo ${req.params.id}`);
            }

            res.json({ records: doc });
        }
    );
})

/* Retrieve the of issues for a Repo */
router.get('/:id/issues', (req, res) => {
    let repos = req.db.get('repos');
    let repo = repos.find({ _id: req.params.id }, (err, doc) => {
            if(err){
                return res.send(409, `Failed to retrieve issues for repo ${req.params.id}`);
            }

            res.json({ issues: doc });
        }
    );
})


router.get('/about', (req, res) => {
    let collection = req.db.get('usercollection');

    collection.find({},{}, (e,docs) => {
        res.json(docs);
    });
})

module.exports = router;
