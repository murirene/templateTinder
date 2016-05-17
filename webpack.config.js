var path = require('path');
module.exports = {
	context: path.resolve('src/js'),
	entry: './index.js',
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: 'bundle.js'
	},
	watch: false,
	devtool: 'source-map',
	devServer: {
		contentBase: 'public'
	},
	module: {
		loaders: [
			{	test: /\.(js|jsx)$/,
				exclude: /node_modules/, 
				loader: 'babel-loader',
		        query: {
		          presets: ['es2015', 'react']
		        }
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css'],
		modulesDirectories: [
			'node_modules'
		]
	}
}