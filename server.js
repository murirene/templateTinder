'use strict';
import express from 'express';
import router from './routes';
let app = express();

app.use(express.static('build'));
app.use(express.static('src/public'));


var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/tinder');

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/birds', router);

const PORT = 3000;
let f = () => {
    console.log(`Listening to ${PORT}`);
}

app.listen(3000, f);