'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.base.config');


const env = module.exports = {
    NODE_ENV: 'development'
};

const webpackConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new webpack.EnvironmentPlugin(env),
        new HtmlWebPackPlugin({
            template: './index.html',
            chunksSortMode: 'dependency',
            templateParameters: {
                BASE_URL: '/core/static/' + 'static',
            },
        }),

    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 8000,
        stats: {
            normal: true
        }
    }
});

module.exports = webpackConfig;
