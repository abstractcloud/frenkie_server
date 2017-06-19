var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: {
        app: './assets/bootstrap.js'
    },
    output: {
        path: __dirname + '/dist/js',
        filename: 'app.bundle.js'
    },
    resolve: {
        modules: [
          process.env.NODE_PATH || 'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '../css/fonts/[name].[ext]',
                },
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/app.css")
    ]
};