const { Client, Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

const users = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_USERDATA
});

async function createUser(username, password, email) {
    let valid = true;
    let client = await users.connect();
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            client
                .query('INSERT INTO users(username, password, email) values($1, $2, $3);', [username, password, email])
                .then((res) => {console.log(res)})
                .catch((err) => {
                    console.error('Error executing query', err.stack); 
                    valid = false;
                });
        });
    });
    client.release(true);
    return valid;
}

async function fetchUserByID(userid) {
    let result = {};
    let client = await users.connect();
    client
        .query('SELECT * FROM users WHERE id = $1', [userid])
        .then((res) => {
            result = res.rows[0]; // get the first result since it should always return 1 result.
            client.release(true);
        })
        .catch((err) => {
            console.error('Unexpected error occured', err.stack)
            client.release(true);
        });
    return result;
}

async function fetchUserByName(username) {
    let result = {};
    let client = await users.connect();
    client
        .query('SELECT * FROM users WHERE username = $1', [username])
        .then((res) => {
            result = res.rows[0]
            client.release(true);
        })
        .catch((err) => {
            console.error('Unexpected error occured', err.stack)
            client.release(true);
        })
}

async function fetchAllUsers() {
    let result = {};
    let client = await users.connect();
    client
        .query('SELECT * FROM users')
}

exports = {
    createUser : createUser,
    fetchUserByID : fetchUserByID,
    fetchUserByName : fetchUserByName
}