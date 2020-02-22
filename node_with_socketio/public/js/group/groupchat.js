$(document).ready(function() {

    const socket = io();

    const room = $('#groupName').val();
    const sender = $('#sender').val();

    socket.on('connect', function() {
        console.log('Yea! User Connected');

        const params = {
            room: room,
            name: sender
        }

        socket.emit('join', params, function() {
            console.log('User has joined this channel');
        });
    });

    socket.on('usersList', function(users) {
        let ol =  $('<ol></ol>');

        users.forEach((user, i) => {
            ol.append(`<p><a id="val" data-toggle="modal" data-target="#myModal">${user}</a></p>`);
        });

        $(document).on('click', '#val', function() {
            $('#name').text(`@${$(this).text()}`);
            $('#receiverName').val($(this).text());
            $('#nameLink').attr("href", `/profile/${$(this).text()}`)
        });

        $('#numValue').text(`(${users.length})`);
        $('#users').html(ol);
    });

    socket.on('newMessage', function(data) {
        let template = $('#message-template').html();
        let message = Mustache.render(template, {
            text: data.text,
            sender: data.from
        });

        $('#messages').append(message);
    });

    $('#message-form').on('submit', function(e) {
        e.preventDefault();

        var msg = $('#msg').val();

        socket.emit('createMessage', {
            text: msg,
            room: room,
            sender: sender
        }, function() {
            $('#msg').val('');
        });
    });

});