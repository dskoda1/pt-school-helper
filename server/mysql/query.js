'use strict';

let mysql = require('mysql');
let connection = require('./connect');

module.exports = (query, values, cb) => {
    connection.query(query, values, (err, rows, fields) => {
        if (err) {
            cb(err);
        }
        cb(rows, fields);
    })
}

