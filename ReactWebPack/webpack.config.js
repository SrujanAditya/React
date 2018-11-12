var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + "/index",
    output: {
        path: DIST_DIR,
		filename: "bundle.js",
        publicPath: "/"
    },
	devServer: {
        historyApiFallback: true,
        publicPath: '/',
		inline: true,
		contentBase: DIST_DIR,
        port: 3002,
        open: true,
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
	module: {
		rules: [
			{
                test: /\.js?$/,
                include: SRC_DIR,
				exclude: /(node_modules)/,
                loader: "babel-loader",
				query: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
				}
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ],
    },
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: SRC_DIR + "/index.html",
            filename: "index.html",
            inject: "body"
        })
    ],
    performance: { 
        hints: false 
    }
}
