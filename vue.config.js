/*
 * @Author: shiliangL
 * @Date: 2021-06-10 17:23:35
 * @LastEditTime: 2021-09-17 09:58:33
 * @LastEditors: Do not edit
 * @Description:
 */
const path = require('path');
const px2rem = require('postcss-px2rem');
const dayjs = require('dayjs');
const setting = require('./src/setting');

// moment
const time = dayjs().format('YYYY.MM.DD HH:mm:ss');

process.env.VUE_APP_BUILD_TIME = time;

// 引入等比适配插件

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: setting.baseSize,
});

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = process.env.port || process.env.npm_config_port || 8090;

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development', // 是否开启代码检查
  productionSourceMap: false,
  devServer: {
    port,
    disableHostCheck: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: {
    //   '/': {
    //     target: 'http://119.136.32.106:48028/yanshi.ljfl',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/event/': '',
    //     },
    //   },
    // },
  },
  configureWebpack: () => {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
  },
  chainWebpack(config) {
    if (isProduction) {
      config.plugins.delete('preload'); // TODO: need test
      config.plugins.delete('prefetch'); // TODO: need test
    }
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/variables.scss";',
      },
      postcss: {
        plugins: [
          postcss,
        ],
      },
    },
  },
};
