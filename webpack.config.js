var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry : './src/require/index.js',
	output : {
		'path' : path.resolve(__dirname,'dist'),
		filename : 'main.js'
	},
	plugins: : [
		new HtmlWebpackPlugin();
	]
	
	
}