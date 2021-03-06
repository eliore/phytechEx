const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.tsx"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].[hash].js",
        publicPath: './'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, use: "awesome-typescript-loader"},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, use: "source-map-loader"},
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.(ico|png|gif|jpg|svg)$/i,
                use: [
                    'file-loader?name=fonts/[name].[ext]',
                    'image-webpack-loader'
                ]
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    'url-loader?limit=100000&name=fonts/[name].[ext]'
                ]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    plugins: [
        new CleanPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // Specify the common bundle's name.
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new HtmlWebpackPlugin({
            title: 'PhytechEx',
            filename: 'index.html',
            template: 'index.html',

        }),
        new ExtractTextPlugin({
            filename: "[name].[hash].css",
            allChunks: true
        })
    ]
};