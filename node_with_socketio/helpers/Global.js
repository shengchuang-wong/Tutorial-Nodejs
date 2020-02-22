class Global {

    constructor() {
        this.globalRoom = [];
    }

    enterRoom(id, name, room, img) {
        let roomName = { id, name, room, img }
        this.globalRoom.push(roomName);
        return roomName;
    }
    
    getUser(id) {
        return this.globalRoom.filter(user => user.id === id)[0];
    }

    removeUser(id) {
        let user = this.getUser(id);
        if(user) {
            this.users = this.globalRoom.filter(user => user.id !== id);
        }
        return user;
    }

    getRoomList(room) {
        let roomName = this.globalRoom.filter(user => user.room === room);

        let roomArray = roomName.map(user => {
            return {
                name: user.name,
                img: user.img
            }
        });

        return roomArray;
    }

}

module.exports = { Global };