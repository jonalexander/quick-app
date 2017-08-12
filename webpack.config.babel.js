import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackExternalsPlugin from 'html-webpack-externals-plugin'

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
      new webpack.HotModuleReplacementPlugin(), // Enable HMR
      new HtmlWebpackPlugin({
      title: 'quick',
      hash: true,
      template: './src/index.html'
    }),
     new HtmlWebpackExternalsPlugin({
       externals: [
          {
            module: 'jquery',
            entry: 'dist/jquery.min.js',
            global: 'jQuery'
          }
        ]
     })
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
