module.exports = {
    devServer: {
      overlay: {
        warnings: false,
        errors: false
      },
      proxy: {
        '/': {
        target: 'http://musicapi.leanapp.cn',
        changeOrigin:true
      }}
    },
    lintOnSave: false,
  }