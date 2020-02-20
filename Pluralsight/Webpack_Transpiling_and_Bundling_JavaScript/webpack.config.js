const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const babelLoader = require('./babelLoader.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function(env) {
  const isDevelopment = env === 'development';
  console.log(`============= This is a ${isDevelopment ? 'DEVELOPMENT' : 'PRODUCTION'} build =============`);

  const baseConfiguration = {
    entry: './app/app.js',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'app/dist'),
      filename: 'app.bundle.js',
      publicPath: '/dist/',
    },
    plugins: [
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: isDevelopment,
        ENV_MESSAGE: JSON.stringify(isDevelopment ? 'development' : 'production'),
        ANOTHER_ENV_MESSAGE: JSON.stringify(env),
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
      new CleanWebpackPlugin({
        verbose: true
      }),
    ],
  };

  if(isDevelopment) {
    return merge(baseConfiguration, {
      devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        publicPath: '/dist/',
        watchContentBase: false,
        hotOnly: true,
        overlay: true,
      },
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        {
          apply(compiler) {
            compiler.hooks.done.tap('done', (stat) => console.log(require('util').inspect(compiler.options)));
          }
        },
      ],
    });
  } else {
    return merge(
      baseConfiguration,
      babelLoader,
    );
  };
};
