const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		errorMessage: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

// GET /users
// Give users a name prop and age prop
app.get('/users', (req, res) => {
	res.send([{
		name: 'Mike',
		age: 27
	}, {
		name: 'Andrew',
		age: 25
	}, {
		name: 'Jen',
		age: 26
	}]);
});


app.listen(3000);
module.exports.app = app;