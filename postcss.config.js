const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const plugins = [
  autoprefixer,
];

if (process.env.NODE_ENV === 'development') {
  console.log('push css minifier');
  plugins.push(cssnano);
}

module.exports = { plugins };
