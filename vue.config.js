module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/style/_variables.scss";@import "@/style/_mixins.scss"',
      },
      scss: {
        prependData: '@import "@/style/_variables.scss";@import "@/style/_mixins.scss";',
      },
    },
  },
};
