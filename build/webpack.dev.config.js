let path = require('path')
let webpack = require('webpack')
let pkg = require('../package.json')

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '../lib'),
        filename: 'index.js',
        library: 'easyDialog',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html?minimize'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: '"production"',
            'process.env.NODE_ENV': '"production"'
        }),

        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_console: true
        //     }
        // }),

        new webpack.BannerPlugin([
            pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')',
            'Copyright ' + new Date().getFullYear() + ', ' + pkg.author,
            pkg.license + ' license'
        ].join('\n'))
    ],
    devServer: {},
    devtool: 'source-map'
}