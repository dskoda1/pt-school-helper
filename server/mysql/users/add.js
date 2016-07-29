'use strict';

let query = require('../query');
let bcrypt = require('bcrypt');


module.exports = (userId, email, pw, cb) => {
    const saltRounds = 10;
    let qText = "INSERT INTO users (userid, email, password)";
    qText += `VALUES(\'${userId}\', \'${email}\', `;

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) return cb(err);

        bcrypt.hash(pw, salt, (err, hash) => {
            if (err) return cb(err);
            qText += `\'${hash}\');`;
            query(qText, (err, rows, fields) => {
                if (err) {
                    return cb(err);
                }
            })

            // Store hash in your password DB.
        });
    });

}