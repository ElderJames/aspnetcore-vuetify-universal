const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const clientBundleConfig = require('./build/webpack.client.config')
const serverBundleConfig = require('./build/webpack.server.config')

module.exports = (env) => {
    return [clientBundleConfig, serverBundleConfig];
};
