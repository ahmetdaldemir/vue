const webpack = require('webpack')
module.exports = {
  devServer: {
    port: 3000 // veya başka bir port numarası
  },
  lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_BASE_URL
    : '/',

  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common.js'
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
