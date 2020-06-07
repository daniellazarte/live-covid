const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports ={
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({
            title: 'COVID-19 Simple Clean Componet',
            filename: 'index.html',
            template: './public/index.html'
        })

    ]
};