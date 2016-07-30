'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let selectOne = require('./select').selectOne;
let addUser = require('./add');
let deleteUser = require('./delete');

let connection = require('../connect');

rl.on('line', (input) => {

    const words = input.split(" ");
    const command = words[0];

    if (command === 'add') {
        if (words.length != 4) {
            console.log('\nMake sure you enter a userId, email,' +
                ' and password to add.');
            console.log(`You entered: ${input}`);
        }

        addUser(words[1],
            words[2],
            words[3], (err, rows) => {
                if (err) {
                    console.log('Caught err in addUser');
                    console.log(err);
                }
                else {
                    console.log('User added successfully')
                }
                
            })

    }
    else if (command == 'delete') {
        if (words.length != 2) {
            console.log('\nMake sure you enter a userId to delete.');
            console.log(`You entered: ${input}`);
        }
        
        deleteUser(words[1], (err, rows) => {
            if (err) {
                console.log("error caught deleting user");
                console.log(err);
            } 
            else {
                console.log(`${words[1]} deleted successfully`);
            }
        })

    }
    else if (command == 'select') {
        if (words.length != 2) {
            console.log('\nMake sure you enter a userId to select.');
            console.log(`You entered: ${input}`);
        }
        selectOne(words[1], (result) => {
            if (result[0]) {
                const res = result[0];
                console.log(`userid: ${res.userid}, ` + 
                            `email: ${res.email}, ` +
                            `pw: ${res.password}`);
            }
            else {
                console.log('No results found.');
            }
        });

    }
    else if (command == 'exit') {
        connection.end();
        process.exit();
    }
    else {
        console.log('unrecognized command.');
    }
});
