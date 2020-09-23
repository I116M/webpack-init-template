const commonPaths = require('./common-paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode : 'production',
    entry : {
        app : [`${commonPaths.appEntry}/index.js`]
    },
    output : {
        filename : '[name].[chunkhash].js',
        path : commonPaths.outputPath,
        publicPath: '/'
    },
    devtool : 'source-map',
    module : {
        rules : [
            {
                test : /\.css*/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    optimization : {
        minimize : true,
        splitChunks: {
            cacheGroups : {
                vendor : {
                    chunks : 'initial',
                    test : 'vendor',
                    name : 'vendor',
                    enforce : true
                }
            }
        }
      },
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'css/styles.[hash].css',
            allChunks : true,
            sourceMap: true,
      }),
    ],
};

module.exports = config;