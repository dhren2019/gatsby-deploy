module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Open Sans:300,400,800"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Blog","short_name":"Blog Dhren","start_url":"/","background_color":"#f5f7fb","theme_color":"#d9d900","display":"fullscreen","icon":"src/core/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"321b3d32c0533d9578ad3c4bb1d7bf6f"},
    }]
