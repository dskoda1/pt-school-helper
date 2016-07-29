'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    user: 'dskoda1',
    password: '',
    database: 'c9'
});

module.exports = connection;