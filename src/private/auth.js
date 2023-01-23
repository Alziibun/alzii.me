const db = require('db.js');
class User {
    constructor(id) {
        this = db.getUserByID(id);
    }

    get identifier() {
        return `${this.username}#${this.discriminator}`;
    }
}

exports.User = User;