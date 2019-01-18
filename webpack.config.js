const path = require('path');
module.exports={
	// group all the file to be one file
	entry: './src/app.js',
	output:{
		path:path.join(__dirname,'public'),
		filename:'bundle.js'
	},
	// using babel to convert es6 to es5
	module:{
		rules:[{
			loader:'babel-loader',
			test:/\.js$/,
			exclude:/node_modules/
		},{
			test:/\.s?css$/,
			use:[
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	//debug:can point the error to original file
	devtool:'cheap-module-eval-source-map',

	//for dev server
	devServer:{
		contentBase:path.join(__dirname,'public')
	}
}