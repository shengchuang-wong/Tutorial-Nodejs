const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');
const socketIO = require('socket.io');
const { User } = require('./helpers/UserClass');
const { Global } = require('./helpers/Global');

const container = require('./container');

container.resolve(function (users, _, admin, home, group, result, privateChat) {

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/node_with_socketio', { useNewUrlParser: true });

    const app = setupExpress();

    function setupExpress() {
        const app = express();
        const server = http.createServer(app);
        const io = socketIO(server);
        server.listen(3030, function () {
            console.log('listening on port 3030');
        });

        configureExpress(app);

        require('./socket/groupchat')(io, User);
        require('./socket/friend')(io);
        require('./socket/globalRoom')(io, Global, _);

        // Setup router
        const router = require('express-promise-router')();
        users.setRouting(router);
        admin.setRouting(router);
        home.setRouting(router);
        group.setRouting(router);
        result.setRouting(router);
        privateChat.setRouting(router);
        
        app.use(router);
    }

    function configureExpress(app) {

        require('./passport/passport-local');
        require('./passport/passport-facebook');
        require('./passport/passport-google');

        app.use(express.static('public'));
        app.use(cookieParser());
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    
        app.use(validator());
        app.use(session({
            secret: 'thisisthesecretkey',
            resave: true,
            saveUninitialized: true,
            store: new MongoStore({ mongooseConnection: mongoose.connection  })
        }));

        app.use(flash()); 

        app.use(passport.initialize());
        app.use(passport.session());

        app.locals._ = _;
    }

});