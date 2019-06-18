'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.base.config');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


const env = module.exports = {
    NODE_ENV: 'production'
};

const webpackConfig = merge(commonConfig, {
    mode: 'production',
    devtool: false,

    output: {
        path: resolve('example/dist'),
        publicPath: '../dist',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
    },
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                }
            }),
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            })
        ],
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial' // 只打包初始时依赖的第三方
            },
          }
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin(env),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebPackPlugin({
            template: './index.html',
            //chunksSortMode: 'dependency',
            //templateParameters: {
            //    BASE_URL: '/core/static/' + 'static',
            //},
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
    ]

});

module.exports = webpackConfig;
