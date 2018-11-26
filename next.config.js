const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withTypescript, withImages, withCSS], {
  webpack(config, options) {
    return config;
  }
});
