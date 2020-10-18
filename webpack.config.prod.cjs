/* global require, __dirname, module */
const merge = require('webpack-merge');
const common = require('./webpack.config.cjs');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
    mode: 'production',
    devtool: 'false',
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: [
                    'default', {
                        discardComments: {
                            removeAll: true
                        }
                    }
                ],
                canPrint: true
            })],
    },
};

module.exports = merge(common, config);
