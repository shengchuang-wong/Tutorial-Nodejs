const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
	
	describe('#add', () => {
		it('shoud add two numbers', () => {
			var res = utils.add(33, 11);

			expect(res).toBe(44).toBeA('number');

		});
	});

	it('shoud async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});

	it('should square a number', () => {
		var res = utils.square(3);

		expect(res).toBe(9).toBeA('number');
	});

	it('should async squae a number', (done) => {
		utils.asyncSquare(5, (res) => {
			expect(res).toBe(25).toBeA('number');
			done();
		});
	});
});



it('shoud set firstName and lastName', () => {
	var user = {location: 'US', age: 25};
	var res = utils.setName(user, 'Andrew Mead');

	// expect(user).toEqual(res);
	expect(res).toInclude({
		firstName: 'Andrew',
		lastName: 'Mead'
	})
});

// // Documentation
// it('shoud expect some values', () => {
// 	// expect(12).toNotBe(11);
// 	expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
// 	expect([2,3,4]).toInclude(2);
// 	expect([2,3,4]).toExclude(5);
// 	expect({
// 		name: 'Andrew',
// 		age: 25,
// 		location: 'US'
// 	}).toInclude({
// 		age: 25
// 	});
// 	expect({
// 		name: 'Andrew',
// 		age: 25,
// 		location: 'US'
// 	}).toExclude({
// 		age: 22
// 	});
// });