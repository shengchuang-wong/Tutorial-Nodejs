const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove({_id: "59c1ea8539b3f5d8951f11d8"}).then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove("59c1ea8539b3f5d8951f11d8").then((todo) => {
	console.log(todo);
});