var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config')

var app = express()
var compiler = webpack(config)
console.log(compiler.context)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  quiet: true
})

app.use(devMiddleware)
var staticPath = path.posix.join(path.resolve(__dirname, '../dist'), 'static')
app.use(staticPath, express.static('./static'))


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(8080, function () {
  console.log('Listening on 8080')
})
