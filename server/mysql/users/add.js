'use strict';

let query = require('../query');
let hash = require('./hash');


module.exports.add = (username, email, pw, cb) => {
    let qText = "INSERT INTO users (username, email, password)";
    qText += `VALUES(\'${username}\', \'${email}\', `;

    hash(pw, (err, hash) => {
        if (err) return cb(err);

        qText += `\'${hash}\');`;
        query(qText, (err, rows, fields) => {
            return cb(err, rows)
        })

    });
}

module.exports.addHashed = (username, email, hash, cb) => {
    let qText = "INSERT INTO users (username, email, password)";
    qText += `VALUES(\'${username}\', \'${email}\', `;
    qText += `\'${hash}\');`;
    query(qText, (err, rows, fields) => {
        return cb(err, rows);
    })
    
}

module.exports.validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}