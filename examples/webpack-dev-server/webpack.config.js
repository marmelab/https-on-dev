const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [{
            test: /\.svg$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
            }
        }],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        inject: 'body',
    })],
    devServer: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '../../certs/server.key')),
            cert: fs.readFileSync(path.resolve(__dirname, '../../certs/server.crt')),
        },
        port: 3000,
    },
};
