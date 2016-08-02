'use strict';
let bcrypt = require('bcrypt');

module.exports = (password, cb) => {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, cb);
}
