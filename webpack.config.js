const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,

  entry: {
    vendor: [
//    polyfills needed if core.js not referenced separately (also add "core-js": "^2.3.0" to package.json):
//    'core-js/es6/array',
//    'core-js/es6/map',
//    'core-js/es6/string',
//    'core-js/es6/symbol',
//    'core-js/es7/reflect',

//    if we want to go with the angular2 provided zone + reflect-metadata
//    'angular2/bundles/angular2-polyfills',

      'zone.js/dist/zone',
      './src/ie-fix.js',
      './src/vendor',
    ],
    app: [
      './src/main',
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./src')
  },

  module: {
    loaders: [
      { test: /\.ts$/, exclude: [/\.spec\.ts$/, 'node_modules'], loader: 'ts' },
    ],

    noParse: [/angular2\/bundles\/.+/, /zone\.js\/dist\/.+/]
  },

  ts: {
    transpileOnly: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular2 Webpack Polyfill Demo',
      chunksSortMode: 'none',
      filename: 'index.html',
      cache: true,
      hash: false,
      inject: 'body',
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
};
