/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 14:49:49
 * @version $Id$
 */
var path=require('path');
var webpack=require('webpack');
var HtmlwebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
// var autoprefixer=require('autoprefixer');
var cssnano=require('cssnano');
var cssnext=require('postcss-cssnext');
// var precss=require('precss');

module.exports={
	entry:{
		index:'./client/src/index',
		detail:'./client/src/detail'
	},
	output:{
		path:path.join(__dirname,'client/build'),
		filename:'[name].js'
	},
	plugins:[
	    new webpack.HotModuleReplacementPlugin(),
	    new HtmlwebpackPlugin({
	    	title:'index',
	    	filename:'index.html',
	    	chunks:['index'],
	    	template:'./client/src/index-tmp.html'
	    }),
	    new HtmlwebpackPlugin({
	    	title:"detail",
	    	filename:"detail.html",
	    	chunks:['detail'],
	    	template:'./client/src/index-tmp.html'
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	    	compress:{
	    		warnings:false
	    	}
	    }),
	    new ExtractTextPlugin("style.css")
	],
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				exclude:function(path){
					var a=path.indexOf('node_modules');
					if(a==-1){
						return false;
					}
					else{
						return true;
					}
				},
				loader:'babel',
				query:{
					presets:['es2015','react'],
					plugins:['transform-remove-console'],
					compact:false
				}
			},
			{
				test:/\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
			},
			{
				test:/\.(jpg||png)$/,
				loader:'url?limit=400&name=imgs/[name]-[hash].[ext]'
			}
		],
		noParse:[/redux-thunk/]
	},
	externals:{
		react:true,
		ReactDOM:true,
		redux:true
	},
	resolve:{
		alias:{
			ReactDOM:"react-dom",
			"react-redux":'react-redux/dist/react-redux.min.js',
			"redux-thunk":'redux-thunk/dist/redux-thunk.min.js'
		}
	},
	postcss:function(){
		return [cssnext, cssnano]
	}
}




























