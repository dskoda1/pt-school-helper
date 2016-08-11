'use strict';
let addUser = require('../mysql/users/add').addHashed; 
let auth = require('../mysql/users/auth');

module.exports = (router) => {
    
    router.get('/register', (req, res) => {
        let ret = {
            info: "Successful get!"
        }
        res.json(ret);
    })
    
    router.post('/register', (req, res) => {
        console.log(req.body);
        addUser(
            req.body.username,
            req.body.email,
            req.body.password,
            (err, rows) => {
                if (err) {
                    console.log('caught err in addHashed user');
                    console.log(err);
                    res.err(err);
                }
                else {
                    res.json({registration: true,
                        status: 'Success!'
                    });
                }
            })
    })
    
    router.post('/login', (req, res) => {
        auth(
            req.body.username,
            req.body.password,
            (err, rows) => {
                if (err) {
                    console.log('caught err in authenticating user')
                    console.log(err);
                    res.err(err);
                }
                else {
                    res.json({
                        status: 'Success'
                    });
                }
            })
    })
}