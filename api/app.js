'use strict';

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://readOnly:PassWord@ds161399-a0.mlab.com:61399,ds161399-a1.mlab.com:61399/maturify?replicaSet=rs-ds161399";

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

