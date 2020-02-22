module.exports = function(io, User) {

    const users = new User();

    io.on('connection', (socket) => {
        console.log('User Connected');

        socket.on('join', (params, callback) => {
            socket.join(params.room);

            users.addUserData(socket.id, params.name, params.room);

            io.to(params.room).emit('usersList', users.getUserList(params.room));

            callback();
        });

        socket.on('createMessage', (message, callback) => {
            io.to(message.room).emit('newMessage', {
                text: message.text,
                room: message.room,
                from: message.sender
            });

            callback();
        });

        socket.on('disconnect', () => {
            let user = users.removeUser(socket.id);
            if(user) {
                io.to(user.room).emit('usersList', users.getUserList(user.room));
            }
        });
    });
}