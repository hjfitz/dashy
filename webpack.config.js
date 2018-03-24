const Notifier = require('webpack-build-notifier');
const webpack = require('webpack');
const path = require('path');

const plugins = [new Notifier({ title: `${process.env.SITE_NAME || 'Webpack'}` })];
const output = path.join(__dirname, 'public', 'javascripts');

if (process.env.NODE_ENV === 'production') {
  console.log('Building bundle for production...');
  plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
  );
}

const babelConfig = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      targets: {
        browsers: [
          'last 2 versions',
          'ie >= 11',
        ],
      },
    }],
    '@babel/react',
  ],
};

const sassConfig =
  [
    { loader: 'style-loader' },
    { loader: 'css-loader', options: { importLoaders: 1 } },
    { loader: 'postcss-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules'),
        ],
      },
    },
  ];


module.exports = {
  entry: { bundle: ['./src/client/router.jsx'] },
  output: { filename: '[name].js', path: output },
  devtool: 'source-map',
  resolve: { extensions: ['.js', '.jsx', '.json', '.sass'] },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: sassConfig,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: babelConfig,
      },
    ],
  },
  plugins,
};
