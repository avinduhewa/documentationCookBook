'use strict';

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://admin:password@ds143081.mlab.com:43081/documentation_cook_book";

function dbConnect(cb) {
    MongoClient.connect(url, function(err, db) {
        if (err) return cb(err);
        return cb(db);
    });
}
//////////////////////

const express = require('express')
const app = express()


app.get('/', function (req, res) {
    return res.send({status: 200, body: "Hello world" });
});

app.listen(4200, function () {
  console.log('Example app listening on port 4200!')
});

