import express from 'express';
let router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

router.get('/about', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        console.log(JSON.stringify(docs));
        res.json(docs);
    });
})

module.exports = router;
