const autoprefixer = require('autoprefixer');
const validate = require('webpack-validator');
const path = require('path');

const config = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/, // ← Test for ".js" file, if it passes, use the loader
        include: /src/,
        loader: 'babel' // ← Use babel (short for ‘babel-loader’) loads collection of ES6 transforms, JSX for react etc.. from .babelrc file
      },
      {
        test: /\.css$/, // ← Test for ".css" file, if it passes, use the loader
        include: /src/,
        loaders: [
          'style',
          'css?modules&localIdentName=[name]__[local]____[hash:base64:5]',
          'postcss'
        ] // ← loaders working bottom to top
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: [ path.resolve(__dirname, 'src/images') ],
        loader: 'url?limit=25000'
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};

module.exports = validate(config);
