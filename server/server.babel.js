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

let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let config = require('./webpack.config.js');
console.log('compiling..');
const compiler = webpack(config);
router.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))
router.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

console.log('done compiling');


// Direct express to serve react app in client/build
router.get('/', (req, res) => {
    res.sendFile(path.resolve('../client/build/index.html'));
})
//router.use(express.static(path.resolve('../client/build')))
//router.use('*', express.static(path.resolve('../client/build')));
// Start listening
router.listen(8080,(err) => {
    if (err) return console.error(err);
    //console.log(path.join(__dirname, '../client/build/index.html'))

    console.log('listening at ' + 8080);
})
