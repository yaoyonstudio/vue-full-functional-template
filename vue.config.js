const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
  // const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : process.env.VUE_APP_PREFIX,
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.ANALYZE ? 'static' : 'disabled',
        openAnalyzer: process.env.CI !== 'true',
      }),
    ],
  },
  devServer: {
    port: 8881,
  },
}