const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const commonConfig = {
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    node: {
        fs: 'empty',
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: /src/,
                loader: 'ts-loader',
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: "[path][name].[ext]",
                },
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader',
                options: {
                    name: "[path][name].[ext]",
                },
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules', 'src']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./templates/index.html",
            cache: true,
        }),
    ],
    stats: {
        colors: true,
        children: false,
        chunks: false,
        modules: false
    }
};

module.exports = [

    // Main process
    Object.assign(
        {
            target: 'electron-main',
            entry: { main: path.resolve(__dirname, './src/main/main.ts') }
        },
        commonConfig),

    // Render process
    Object.assign(
        {
            target: 'electron-renderer',
            entry: { app: path.resolve(__dirname, './src/renderer/renderer.ts') },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: 'index.css'
                })
            ]
        },
        commonConfig)
]