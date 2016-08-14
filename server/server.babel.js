//'use strict';

// library includes
let path = require('path');

// Set up express
let express = require('express');
let router = express();

// Set up body parsing for posts
let bp = require('body-parser');
router.use(bp.json({}));

// Set up logging
let morgan = require('morgan');
router.use(morgan(':method :url in :response-time ms status :status'))

// Set up routes
let routes = require('./routes/user');
routes(router);


// router.get('/sockjs-node/info', cors(), (req, res) => {
//     res.end();
// })

// Direct express to serve react app in client/build
//router.use(express.static(path.resolve('../client/build')))
router.use('/', express.static(path.resolve('../client/build')));
router.listen(process.env.PORT || 8080);
// Start listening
// router.listen(process.env.PORT,(err) => {
//     if (err) return console.error(err);
//     //console.log(path.join(__dirname, '../client/build/index.html'))

//     console.log('listening at ' + process.env.PORT);
// })