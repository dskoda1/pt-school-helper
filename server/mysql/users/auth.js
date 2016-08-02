'use strict';

let select = require('./select');
let bcrypt = require('bcrypt');

module.exports = (username, password, cb) => {
    select(username, (result) => {
        if (result) {
            const res = result[0];
            bcrypt.compare(password, res.password, cb)
        }
        else {
            cb();
        }
        
    });
    
}