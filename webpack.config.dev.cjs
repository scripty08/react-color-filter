const merge = require('webpack-merge');
const common = require('./webpack.config.cjs');
const { HotModuleReplacementPlugin } = require('webpack');
const { WebpackAfterCompilePlugin, printTable } = require('@scripty/webpack-after-compile-plugin');

let data = [
    ['URL: ', 'http://localhost:3004'],
];

const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        `webpack-hot-middleware/client?path=/__webpack_hmr`
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new WebpackAfterCompilePlugin('Pages', () => printTable(data)),
    ],
    watchOptions: {
        poll: 1000,
        ignored: ['node_modules', 'public/dist/']
    },
};

module.exports = merge(common, config);
