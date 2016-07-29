'use strict';

let query = require('./mysql/query');

let express = require('express');
let path = require('path');
let app = express();






app.use(express.static(path.resolve('../client/build')))
app.listen(process.env.PORT,(err) => {
    if (err) return console.error(err);
        console.log(path.join(__dirname, '../client/build/index.html'))

    console.log('listening at ' + process.env.PORT);
})

// let userid = 'dskoda';


// 
// query(`SELECT password FROM users WHERE userid=${userid};`, (rows, fields) => {
//     console.log(rows);    
// })