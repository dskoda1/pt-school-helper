'use strict';

let mysql = require('mysql');
let connection = require('./connect');



module.exports = (query, cb) => {
    connection.connect();
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;
        cb(rows, fields);
    })
    connection.end();
}
