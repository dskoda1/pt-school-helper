
module.exports = {
  entry: [
    //'webpack/hot/dev-server',
    //'webpack-hot-middleware/client',
    '../client/src/index.js'
    ],
  output: {
    path: '../client/build',
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
  }
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