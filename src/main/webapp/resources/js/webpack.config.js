const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		mainPage: './mainPage/mainPage.js',
		detail: './detail/detail.js',
		myReservation: './myReservation/myReservation.js',
		reserve: './reserve/reserve.js',
		reviewWrite: './reviewWrite/reviewWrite.js'
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: '[name].js',
		publicPath: './',
	},
	module: {

	},
	plugins: [],
	resolve: {
		modules: ['node_modules', 'detail', 'mainPage', 'myReservation', 'reserve', 'reviewWrite', './'],
		extensions: ['.js', '.json', '.jsx', '.css'],
		alias: {
			egComponent: '@egjs/component/dist/component.min',
			Handlebars: 'handlebars/dist/handlebars.min'
		}
	},
};