const
	path = require('path'),
	webpack = require('webpack'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
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
			rules:[
				{test: /\.tsx?$/, loader: 'ts-loader'},
				{
					test: /\.css$/,
					use: [
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					}
					]
				}
			]
		},
		plugins:[
			new CleanWebpackPlugin(['dist']),
			new HtmlWebpackPlugin({
				template: './index.html'
			})
		]
	};


module.exports = config;