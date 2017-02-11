var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config')
var compiler = webpack(config, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
console.log('context', compiler.context)
