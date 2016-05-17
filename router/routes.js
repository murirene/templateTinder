import express from 'express';
let router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

router.get('/about', function(req, res) {
    res.json({ message: 'About birds' });
})

module.exports = router;
