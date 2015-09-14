var expect = require('chai').expect,
	sinon = require('sinon');

describe('App', function () {

	var App = require('./app'),
		app;

	beforeEach(function () {
		app = new App();
	});

	describe('Always', function () {
		it('Creates an instance of App', function () {
			expect(app).instanceOf(App);
		});
	});

});