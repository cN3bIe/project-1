const
	path = require('path'),
	webpack = require('webpack'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	paths = {
		src: path.resolve(__dirname, 'src'),
		dist: path.resolve(__dirname, 'dist')
	},
	config = {
		context: paths.src,
		entry: {
			app: './index'
		},
		output:{
			path: paths.dist,
			filename: '[name].bundle.js'
		},
		resolve:{
			extensions:['.ts','.tsx','.js','.jsx']
		},
		devtool: 'inline-source-map',
		module:{
			loaders: [
				{ test: /\.tsx?$/, loader: 'ts-loader' }
			],
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					test: /\.sass$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [ 'css-loader', 'sass-loader' ]
					})
				}
			]
		},
		plugins:[
			new ExtractTextPlugin('app.css'),
			new CleanWebpackPlugin(['dist']),
			new HtmlWebpackPlugin({
				template: './index.html'
			})
		]
	};


module.exports = config;