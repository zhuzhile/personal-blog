module.exports = {
    chainWebpack: (config) => {
        /* 添加分析工具*/
        // if (process.env.NODE_ENV === 'production') {
            // if (process.env.npm_config_report) {
                // config
                //     .plugin('webpack-bundle-analyzer')
                //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                //     .end();
                // config.plugins.delete('prefetch')
            // }
        // } 

        config.optimization.splitChunks({
            cacheGroups: {
              viewUI: {
                name: 'iview',
                priority: 20,
                test: /[\\/]node_modules[\\/]_?view-design(.*)/,
                chunks: 'all'
              },
              mavonEditor: {
                name: 'mavonEditor',
                priority: 20,
                test: /[\\/]node_modules[\\/]_?mavon-editor(.*)/,
                reuseExistingChunk: true,
                chunks: 'all'
              }
            }
        })
    }

}