module.exports = {
    devServer: { 
          proxy: 'https://www.fruityvice.com/api/fruit',
    },
    transpileDependencies: [
      'vuetify'
    ]
  }