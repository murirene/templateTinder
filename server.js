'use strict';

let express = require('express');
let router = require('./router/routes');
let bodyParser = require("body-parser");

let app = express();

app.use(express.static('build'));
app.use(express.static('src/public'));


let mongo = require('mongodb');
let monk = require('monk');
let db = monk('localhost:27017/tinder');

app.use(bodyParser.urlencoded({ extended: false }));

// Make our db accessible to our router
app.use( (req,res, next) => {
    req.db = db;
    next();
});

app.use('/repos', router);

const PORT = 3000;

let f = () => {
    console.log(`Listening to ${PORT}`);
}

app.listen(PORT, f);