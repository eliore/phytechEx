const webpack = require('webpack');
const config = require('./webpack.config');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    mangle: true
}));

config.plugins.push(new webpack.DefinePlugin(GLOBALS));

module.exports = config;