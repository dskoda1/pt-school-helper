'use strict';

let mysql = require('mysql');
let connection = require('./connect');



module.exports = (query, cb) => {
    connection.getConnection();
    connection.query(query, (err, rows, fields) => {
        connection.release();
        if (err) {
            cb(err);
        }
        cb(rows, fields);
    })
}
