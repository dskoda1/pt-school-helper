'use strict';

let query = require('../query');

module.exports = {};

module.exports = (userid, cb) => {

    query(`DELETE FROM users WHERE userid=\'${userid}\';`, (err, rows, fields) => {
        return cb(err, rows);

    })

}