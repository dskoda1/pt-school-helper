'use strict';

let mysql = require('mysql');

let pool = mysql.createPool({
    host:'localhost',
    user: 'dskoda1',
    password: '',
    database: 'c9'
});

module.exports = pool;
