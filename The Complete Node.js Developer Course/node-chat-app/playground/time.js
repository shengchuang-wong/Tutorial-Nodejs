var moment = require('moment');

var someTimestamp = moment().valueOf();

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));