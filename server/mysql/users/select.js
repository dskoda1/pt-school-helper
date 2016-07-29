'use strict';

let query = require('../query');

module.exports = {};

module.exports.select = (userid) => {
    
    query(`SELECT * FROM users WHERE userid=\'${userid}\';`, (rows, fields) => {
    
    console.log(rows);
    
})
    
}