var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    '../client/src/index.js'
    ],
  output: {
    path: '/',
    publicPath: 'http://localhost:8080/scripts/',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'] 
  },
  plugins: [
    // Webpack 1.0 
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling 
    // new webpack.optimize.OccurrenceOrderPlugin(), 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    ]
};


// entry: [
//     'webpack/hot/dev-server',
//     'webpack-hot-middleware/client',
//     '../client/src/index.js'
//     ],
//   output: {
//     path: '/',
//     filename: 'bundle.js'       
//   },