const db = require('db.js');
const bcrypt = require('bcrypt');
const session = require('express-session');
class User {
    constructor(id) {
        this = db.getUserByID(id);
    }

    get identifier() {
        return `${this.username}#${this.discriminator}`;
    }
}

class Group {
    constructor(id) {

    }
}

async function signup(request, response) {
    let username = request.param('username');
    let password = request.param('password');
    let email = request.param('email')
    let result = db.getUserByName(username);
    if (result) {
        response.setHead(200);
        response.send("Username already exists.");
    } else {
        await db.createUser(username, password, email);
        response.setHead(200);
        response.send("User created");
    }
}

function login(request, response) {
    let username = request.param('username')
    let password = request.param('password')
    let data = db.getUserByName(username)
    if (data) {
        if (bcrypt.compare(password, data.password)) {
            response.setHead(200)
            response.send("Log-in accepted.  Welcome to the site!")
        } else {
            response.setHead(200)
            response.send("Password incorrect")
        }
    }
}

function init(app) {
    app.post('/auth', (request, response) => {
        if (request.param('protocol') == 'register') {
            signup(request, response)
        }
        if (request.param('protocol') == 'login') {
            login(request, response)
        }
    })
}

exports = {
    User: User,
    init: init
}