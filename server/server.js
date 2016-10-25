// require('babel-register')({
//   presets:['es2015','react']
// })

// require('node-jsx').install({
//   extension:'.jsx'
// })

var loopback = require('loopback');
var boot = require('loopback-boot');
var webpackDevMiddleware=require('webpack-dev-middleware');
var webpackHotMiddleware=require('webpack-hot-middleware');
var webpack=require('webpack');
var config=require('../webpack.config');


var app = module.exports = loopback();
var compiler=webpack(config);
app.use(webpackDevMiddleware(compiler,{noInfo:false}));
app.use(webpackHotMiddleware(compiler));

app.set('views','./server/views');
app.set('view engine','jade');

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  // if (require.main === module)
    app.start();
});
