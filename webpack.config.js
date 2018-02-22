const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const isWeb = (argv && argv.target === 'web');
const output = (isWeb ? 'dist/web' : 'dist/electron');

const commonConfig = {
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, output),
        filename: '[name].js'
    },
    node: {
        fs: 'empty',
        __dirname: false
    },
    devServer: {
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader!ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude : /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules', 'src']
    }
};

module.exports = [
    Object.assign(
        {
            target: 'electron-main',
            entry: { main: path.join(__dirname, './src/main.ts') }
        },
        commonConfig),
    Object.assign(
        {
            target: 'electron-renderer',
            entry: { app: path.join(__dirname, './src/app.ts') },
            plugins: [
                new CleanWebpackPlugin([output], {}),
                new CopyWebpackPlugin([
                    { from:  './templates/index.html' }
                ], {
                    ignore: ['.DS_Store'],
                    copyUnmodified: true
                }),
                new ExtractTextPlugin({
                    filename: 'style.css'
                })]
        },
        commonConfig)
];
