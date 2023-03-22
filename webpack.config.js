const path = require('path')

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, './src/app.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, './public')
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    }
}