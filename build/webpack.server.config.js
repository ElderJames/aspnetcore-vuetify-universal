const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const path = require('path');

const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(base, {
  target: 'node',
  devtool: '#source-map',
  entry: { 'main-server': './ClientApp/assets/entry-server.js' },
  output: {
    path: path.join(__dirname, '../wwwroot/dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: isProd ? /\.css$/ : [/\.css$/, 'vuetify']
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
})
