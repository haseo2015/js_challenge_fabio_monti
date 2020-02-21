module.exports = {
  filenameHashing: true,
  configureWebpack: {
    output: {
      filename: 'challenge.[hash:8].js'
    }
  },
  outputDir: process.env.NODE_ENV === 'development' ? './dist-dev' : './dist',
  css: {
    sourceMap: true
  }
}