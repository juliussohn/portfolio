const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "[name].css",
	disable: process.env.NODE_ENV === "development"
});
const content = require("./content.js");

module.exports = {
	entry: "./src/entry.js",
	output: {
		path: __dirname + "/build/",
		filename: "bundle.js"
	},
	module: {
		rules: [ {
			test: /\.scss$/,
			use: extractSass.extract({
				use: [ {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				} ],
				// use style-loader in development
				fallback: "style-loader"
			})
		},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
				query: { inlineRequires: '/images/' }
			},
			/*{
				test: /\.(png|jpg|gif)$/,
				resourceQuery: /[?&](sizes|placeholder)(=|&|\[|$)/,
				use: [
					'srcset-loader',
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			},*/
			{
				test: /\.(jpe?g|png)$/i,
				loader: 'responsive-loader',
				options: {
					//adapter: require('responsive-loader/sharp'),
				}
			},
			{
				test: /\.(woff)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]'
						}
					}
				]
			} ]
	},
	plugins: [
		extractSass,
		new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			data: content,
			template: 'src/templates/home.hbs'
		})
	]
};