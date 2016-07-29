'use strict';

let query = require('../query');
let bcrypt = require('bcrypt');


module.exports = (userId, email, pw, cb) => {

    const saltRounds = 10;
    let qText = "INSERT INTO users (userid, email, password)";
    qText += `VALUES(\'${userId}\', \'${email}\', `;
    
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(pw, salt, (err, hash) => {
            qText += `\'${hash}\');`;
            query(qText, (rows, fields) => {
                console.log(rows);                
            })
            // Store hash in your password DB.
        });
    });
    
}