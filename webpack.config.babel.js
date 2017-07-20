import webpack from 'webpack';
import path from 'path';

module.exports = {

  entry: {
    index: ['./src/index.js']
  },

  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: './dist',
    publicPath: '/'
   },

   plugins: [
      new webpack.HotModuleReplacementPlugin() // Enable HMR
   ],

  module: {

    rules: [

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }

    ]

  }
};

