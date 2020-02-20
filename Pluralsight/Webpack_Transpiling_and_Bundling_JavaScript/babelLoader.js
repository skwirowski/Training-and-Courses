const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'tee-loader',
            options: {
              label: 'before'
            }
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'tee-loader',
            options: {
              label: 'after'
            }
          },
        ]
      }
    ],
  },
  resolveLoader: {
    alias: {
      'tee-loader': path.resolve(__dirname, 'tee-loader.js')
    }
  }
}