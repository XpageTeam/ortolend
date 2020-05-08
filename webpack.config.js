const webpack = require("webpack"),
	UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
	path = require("path");

let plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
	// new webpack.ProvidePlugin({
	// 	$: "jquery",
	// 	jQuery: "jquery",
	// 	is: "is_js",
	// 	// "window.$": "jquery",
	// 	// "window.jQuery": "jquery",
	// })
], devtool = false, watch = false;

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
        // NODE_ENV: '"development"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}else{
	devtool = '#source-map'
	watch = true
}

module.exports = [{
	entry: [
		"babel-polyfill",
		"./src/js/common.js",
	],
	output: {
		filename: "common.js",
		path: path.resolve(__dirname, "./dist/js/"),
	},
	watch: watch,
	devtool: devtool,
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
				  "presets": [
				    ["env", {
				      "loose": true,
				    }]
				  ],
				},
				exclude: /(node_modules|bower_components)/,
			},
			{
				test: /\.css$/,
				// loader: "css-loader",
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							minimize: true,
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js",
			// "ui-slider": "jquery-ui/ui/widgets/slider.js",
			modules: path.join(__dirname, "node_modules"),
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	plugins: plugins
}];