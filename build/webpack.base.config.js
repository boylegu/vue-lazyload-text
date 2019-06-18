'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';


const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function assetsPath(_path) {
    const assetsSubDirectory = '/static'

    return path.posix.join(assetsSubDirectory, _path)
}


const webpackConfig = {
    entry: {
        app: './example/main.js'
    },
    resolve: {
      extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
            '@': resolve('example')
        }
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                'scss': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ],
                'sass': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader?indentedSyntax'
                ]
              }
            }
          },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('example')]
            },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
                    {loader: 'css-loader', options: {sourceMap: isDev}},
                ]
            },
          {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
          },
          {
            test: /\.sass$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ],
          },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                include: [resolve('example/assets')],
                options: {
                    limit: 10000,
                    name: assetsPath('[name].[hash:7].[ext]')
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}

module.exports = webpackConfig;
