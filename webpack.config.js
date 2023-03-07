const path = require('path');

module.exports= {
   
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.js',
    node: {
        global: true
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        fallback: {
          util: require.resolve("util/")
        }
    }

}