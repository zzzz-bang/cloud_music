module.exports = {
    devServer: {
      overlay: {
        warnings: false,
        errors: false
      },
      proxy: {
        '/': {
        target: 'http://musicapi.leanapp.cn',
        changeOrigin:true,
        },
        'search':{
          target:'https://music.163.com',
          changeOrigin:true
        }
      } 
    },
    lintOnSave: false,
  }