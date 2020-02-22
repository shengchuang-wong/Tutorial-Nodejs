Node.js
=======
1. Node.js Thread - Recommended (Used only when there are good reasons)
- Some methods using Thread Pool (default 4 threads) - e.g. fs module and crypto
- Some methods using OS process - e.g. https
- So they are not stop any of each type. But thread will need to wait as always
- Tricks: SET UV_THREADPOOL_SIZE=1 can set the number of threads in thread pool, use it wisely

2. Nodejs Create thread
const cluster = require('cluster');
npm install -g pm2 - multiple cluster for process

3. Node.js Worker Threads - Experimental stage for current IT trends
npm install --save webworker-threads

4. For any function which using callback, can change to async await
E.g. with redis

const util = require('util');
client.get = util.promisify(client.get);

const cahced = await client.get(id);

Node.js Package
===============
axios
body-parser
concurrently
dotenv
express
faker
multer
webpack
nodemon
bcrypt-nodejs
passport
jest
redis
jsonwebtoken

React Package
=============
react
react-dom
enzyme
react-redux
redux
redux-logger
redux-thunk