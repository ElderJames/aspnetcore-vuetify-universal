const path = require('path');
const webpack = require('webpack');
const clientBundleConfig = require('./build/webpack.client.config')
const serverBundleConfig = require('./build/webpack.server.config')

module.exports = (env) => {
    return [clientBundleConfig, serverBundleConfig];
};
