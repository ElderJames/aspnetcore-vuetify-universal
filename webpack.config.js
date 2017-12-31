const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecachePlugin = require('sw-precache-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const resolve = (file) => path.resolve(__dirname, file);

module.exports = (env) => {
    // Configuration in common to both client-side and server-side bundles
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        devtool: isDevBuild
            ? false
            : '#cheap-module-source-map',
        stats: { modules: false },
        context: __dirname,
        resolve: { 
            extensions: ['*', '.js', '.json', '.vue', '.ts' ,'.css'], 
            alias: {
                '@': resolve('./ClientApp/'),
                'vue$': 'vue/dist/vue.common.js'
              }
        },
        output: {
            filename: '[name].js',
            publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            noParse: /es6-promise\.js$/, // avoid webpack shimming process
            rules: [
                {
                    test: /\.vue$/,
                    include: /ClientApp/,
                    loader: 'vue-loader',
                    options: {
                        extractCSS: !isDevBuild,
                        preserveWhitespace: false,
                        postcss: [
                          require('autoprefixer')({
                            browsers: ['last 3 versions']
                          })
                        ]
                    },
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                      loader:'css-loader',
                      options: {
                        minimize: !isDevBuild
                      }
                    })
                },
                {
                    test: /\.styl$/,
                    loader: ['style-loader', `css-loader?minimize=${!isDevBuild}`, 'stylus-loader']
                },
                { test: /\.ts$/, use:  'awesome-typescript-loader?silent=true' },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
              // sass
                { test: /\.scss$/, loaders: ['to-string-loader', 'css-loader', 'sass-loader'] },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                      limit: 10000,
                      name: 'img/[name].[hash:7].[ext]'
                    }
                }
            ]
        },
        performance: {
            maxEntrypointSize: 300000,
            hints: isDevBuild ? 'warning' : false
          },
        plugins: [
            new CheckerPlugin(),
            new ExtractTextPlugin({
                filename: 'common.[chunkhash].css'
              }),
              new FriendlyErrorsPlugin(),
              new CopyWebpackPlugin([
                {
                  from: 'ClientApp/static/',
                  to: '../static/'
                }])
        ].concat(isDevBuild?[]:[
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: { warnings: false }
            //   })
            new UglifyJSPlugin({
                sourceMap: true,
                uglifyOptions: { ecma: 8 },
            })
        ])
    };

    
    // Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = './wwwroot/dist';
    const clientBundleConfig = merge(sharedConfig, {
        entry: { 'main-client':'./ClientApp/assets/entry-client.js' },
        output: { path: path.join(__dirname, clientBundleOutputDir) },
        plugins: [
            // new webpack.DllReferencePlugin({
            //     context: __dirname,
            //     manifest: require('./wwwroot/dist/vendor-manifest.json')
            // }),
           new VueSSRClientPlugin()
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [])
    });

        // Configuration for server-side (prerendering) bundle suitable for running in Node
        const serverBundleConfig = merge(sharedConfig, {
            // resolve: { mainFields: ['main'] },
            target: 'node',
            devtool: isDevBuild ? 'inline-source-map': false,
            entry: { 'main-server':'./ClientApp/assets/entry-server.js'},
            output: {
                path: path.join(__dirname, './ClientApp/dist'),
                filename: '[name].js',
                libraryTarget: 'commonjs2'
            },
            // https://webpack.js.org/configuration/externals/#externals
            // https://github.com/liady/webpack-node-externals
            // externals: nodeExternals({
                // do not externalize CSS files in case we need to import it from a dep
               // whitelist: !isDevBuild ? /\.css$/ : [/\.css$/, 'vuetify']
            // }),
            plugins: [
                // new webpack.DllReferencePlugin({
                //     context: __dirname,
                //     manifest: require('./ClientApp/dist/vendor-manifest.json'),
                //     sourceType: 'commonjs2',
                //     name: './vendor'
                // }),
                new VueSSRServerPlugin()
            ]
        });

        return [clientBundleConfig, serverBundleConfig];
};
