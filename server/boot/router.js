/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-09 17:10:20
 * @version $Id$
 */
require('babel-register')({
  presets:['es2015','react']
})

require('node-jsx').install({
  extension:'.jsx'
})

import Counter from '../../client/src/components/counter'
var React=require('react');
var ReactDOM=require('react-dom/server');
var loopback=require('loopback');

var routerHandle=require("../handle/routerhandle");


var Counterstr=React.createFactory(Counter);




module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();

  router.get('/news', function(req,res){
    var article=server.models.article;
    article.find({
      skip:0,
      fileds:{
        time:true,
        title:true,
        summary:true
      },
      limit:10
    },function(err,data){
      if(err){
        res.json(err);
      }
      else{
            res.render('index',{
              react:ReactDOM.renderToString(Counterstr({counter:1,news:data})),
              counter:1,
              news:data
            });
      }
    })
  });

  router.get('/edit',function(req,res){
    res.render('edit');
  });

  router.post('/uploadImg',routerHandle.uploadImg);


  server.use(router);
};































