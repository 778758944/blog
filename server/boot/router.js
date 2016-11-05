/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-09 17:10:20
 * @version $Id$
 */

// require('babel-polyfill')

// require('babel-register')({
//   presets:['es2015','react']
// })

require('node-jsx').install({
  extension:'.jsx'
})

var co=require('co');

import Counter from '../../client/src/components/counter'
import Detail from '../../client/src/components/detail'

var React=require('react');
var ReactDOM=require('react-dom/server');
var loopback=require('loopback');

var routerHandle=require("../handle/routerhandle");


var Counterstr=React.createFactory(Counter);
var Detailstr=React.createFactory(Detail);




module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();

  router.get('/news', function(req,res){
    var article=server.models.article;
    article.find({
      skip:0,
      fileds:{
        id:true,
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

  router.get('/detail/:id',function(req,res){
    var id=req.params.id;
    var article=server.models.article;
    var pp=function(id){
      return new Promise(function(resolve,reject){
        article.findById(id,function(err,data){
          if(err){
            reject(err);
          }
          else{
            resolve(data);
          }
        })
      })
    }


    // pp(id).then(function(data){
    //   console.log('data',data);
    // },function(err){
    //   console.log(err);
    // })

    function* gen(){
      var data=yield pp(id);
      // console.log(data);
      res.render('detail',{
        react:ReactDOM.renderToString(Detailstr({detail:data})),
        detail:data
      })
    }

    co(gen);

    // var g=gen();
    // console.log(g.next());








    // co(gen);

    // var article=server.models.article;

    // article.findById(id,function(err,data){
    //   if(err){
    //     console.log(err);
    //   }
    //   else{
    //     console.log(data);
    //     res.json(data);
    //   }
    // })

    
  })


  server.use(router);
};































