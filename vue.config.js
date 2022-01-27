module.exports = {
    devServer:{    
      port: 8080, 
      open: true, //浏览器自启动
      proxy: {
        '/api': {
          target: 'http://localhost:8443',
          changeOrigin: true,
          pathRewrite: {
              '^/api': ''
          }
        }
      }
    }}