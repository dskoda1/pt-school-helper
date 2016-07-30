'use strict';

let query = require('../query');

module.exports = {};

module.exports.selectOne = (userid, cb) => {
    query(`SELECT * FROM users WHERE userid=?;`, [userid], (res) => {
        cb(res);
    })
}