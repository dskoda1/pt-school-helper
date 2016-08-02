'use strict';

let query = require('../query');

module.exports = (username, cb) => {
    if (username) {
        query(`SELECT * FROM users WHERE username=?;`, [username], (res) => {
        cb(res);
        });
    }
    else {
        query(`SELECT id, username, email, password FROM users`, [], (res) => {
            cb(res);
        });
    }
    
}