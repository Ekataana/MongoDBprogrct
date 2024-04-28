import express from 'express';
import { connectToDb, getDb } from './db.js';

const PORT = 3000;

const app = express();

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(3000, (err) => {
            err ? console.log(err) : console.log('Listening port: ${PORT}');
        });
        db = getDb();
    } else {
        console.log('DB connection error: ${err}');
    }
});