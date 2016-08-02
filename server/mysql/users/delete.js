'use strict';

let query = require('../query');

module.exports = {};

module.exports = (username, cb) => {

    query(`DELETE FROM users WHERE username=\'${username}\';`, (err, rows, fields) => {
        return cb(err, rows);
    })

}