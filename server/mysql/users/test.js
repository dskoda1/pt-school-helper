'use strict';

let select = require('./select');
let addUser = require('./add').add;
let deleteUser = require('./delete');
let auth = require('./auth');
let connection = require('../connect');

let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const newLine = () => {
    console.log("");
}

const printUsage = () => {
    console.log('Usage:');
    console.log('1. select - get all rows in the table.');
    console.log('2. select <username> - get single user.');
    console.log('3. add <username> <email> <password> - insert into the table.');
    console.log('4. delete <username> - delete from the table.');
    console.log('5. auth <username> <password> - authenticate password');
    newLine();
}



printUsage();
rl.on('line', (input) => {
    const words = input.split(" ");
    const command = words[0];

    if (command == 'select') {

        if (words.length != 1 && words.length != 2) {
            printUsage();
            return;
        }

        let username = "";
        if (words.length == 2) {
            username = words[1];
        }

        select(username, (result) => {
            if (result) {
                for (let i = 0; i < result.length; ++i) {
                    const res = result[i];
                    console.log(`username: ${res.username}, ` +
                        `id: ${res.id}, ` +
                        `email: ${res.email}, ` +
                        `pw: ${res.password}`);

                }
            }
            else {
                console.log('No results found.');
            }
            newLine();
        });

    }
    else if (command === 'add') {
        if (words.length != 4) {
            printUsage();
            return;
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
                newLine();
            })

    }
    else if (command == 'delete') {
        if (words.length != 2) {
            printUsage();
            return;
        }

        deleteUser(words[1], (err, rows) => {
            if (err) {
                console.log("error caught deleting user");
                console.log(err);
            }
            else if (rows.affectedRows > 0) {
                console.log(`${words[1]} deleted successfully`);
            }
            else {
                console.log('user not found.');
            }
            newLine();
        })

    }
    else if (command == 'auth') {
        if (words.length != 3) {
            printUsage();
            return;
        }

        auth(words[1], words[2], (err, res) => {
            if (err) {
                console.log('error caught authenticating user.');
                console.log(err);
            }
            else {
                if (res) {
                    console.log("authenticated!");
                }
                else {
                    console.log('not authenticated.');
                }
            }
        })

    }
    else if (command == 'usage' || command == 'u') {
        printUsage();

    }
    else if (command == 'exit') {
        connection.end();
        process.exit();
    }
    else {
        printUsage();
    }

});
