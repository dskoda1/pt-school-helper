'use strict';

let selectOne = require('./select').selectOne;
let addUser = require('./add');

selectOne('dskoda', (err) => {
   if (err) 
    console.log(err);
});

addUser('user', 'user@gmail.com', 'plainPw', (err) => {
    if (err) 
        console.log(err);
    
});