class User {

    constructor() {
        this.users = [];
    }

    addUserData(id, name, room) {
        let users = { id, name, room }
        this.users.push(users);
        return users;
    }

    getUser(id) {
        return this.users.filter(user => user.id === id)[0];
    }

    removeUser(id) {
        let user = this.getUser(id);
        if(user) {
            this.users = this.users.filter(user => user.id !== id);
        }
        return user;
    }
    
    getUserList(room) {
        let users = this.users.filter(user => user.room === room);

        let namesArray = users.map(user => user.name);

        return namesArray;
    }

}

module.exports = { User };