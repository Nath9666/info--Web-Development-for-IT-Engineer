const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  mode: 'development',
  target: ['web', 'es5'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: '11'
                },
                useBuiltIns: 'entry',
                corejs: 3
              }]
            ]
          }
        }
      }
    ]
  }
}
