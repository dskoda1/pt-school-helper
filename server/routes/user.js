'use strict';

module.exports = (router) => {
    
    router.get('/register', (req, res) => {
        let ret = {
            info: "Successful get!"
        }
        res.json(ret);
    })
    
    router.post('/register', (req, res) => {
        let body = JSON.parse(req.body);
        console.log(body);
        let ret = {
            info: "Successful get!"
        }
        res.json(ret);
    })
    
    
    
}