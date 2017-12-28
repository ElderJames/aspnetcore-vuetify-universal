process.env.VUE_ENV = 'server';

const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer')

const filePath = path.join(__dirname, '../wwwroot/dist/bundle.server.js')
const code = fs.readFileSync(filePath, 'utf8');

const bundle = require('./public/vue-ssr-server-bundle.json')

const bundleRenderer = require('vue-server-renderer').createBundleRenderer(bundle)

module.exports = function (params) {
    return new Promise(function (resolve, reject) {
        bundleRenderer.renderToString(params.data, (err, resultHtml) => { // params.data is the store's initial state
            if (err) {
                reject(err.message);
            }
            resolve({
                html: resultHtml,
                globals: {
                    __INITIAL_STATE__: params.data // window.__INITIAL_STATE__ will be the initial state of the Vuex store
                }
            });
        });
    });
};
