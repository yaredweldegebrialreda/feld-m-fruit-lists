module.exports = {
    devServer: { 
      proxy: {
        '^/api': {
          target: 'https://www.fruityvice.com/api/fruit',
          ws: true,
          changeOrigin: true
        }
      }
          // proxy: 'https://www.fruityvice.com/api/fruit',
    },
    transpileDependencies: [
      'vuetify'
    ]
  }