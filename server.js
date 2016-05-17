'use strict';
import express from 'express';
import router from './routes';
let app = express();

app.use(express.static('build'));
app.use(express.static('src/public'));
app.use('/birds', router);

const PORT = 3000;
let f = () => {
    console.log(`Listening to ${PORT}`);
}

app.listen(3000, f);