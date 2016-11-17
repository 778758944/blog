/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-09 17:10:20
 * @version $Id$
 */

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

var env=process.env.NODE_ENV;

var listRoute=env == 'production' ? '/:num':'/news/:num';




module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();

  router.get(listRoute, function(req,res){
    // req.params.num);
    // console.log(req.params.num);
    var num=req.params.num;
    var pn=(num-1)*10||0;
    var article=server.models.article;
    var p1=new Promise(function(resolve,reject){
      article.find({
        skip:pn,
        fields:{
          id:true,
          time:true,
          title:true,
          summary:true
        },
        limit:10
      },function(err,data){
        if(err){
          reject(err);
        }
        else{
          resolve(data);
        }
      })
    })

    var p2=new Promise(function(resolve,reject){
      article.count(function(err,count){
        if(err){
          reject(err);
        }
        else{
          resolve(count);
        }
      })
    })


    Promise.all([p1,p2]).then(function(data){
      var lastPage=Math.ceil(data[1]/10);
      var news=data[0]
      res.render('index',{
        react:ReactDOM.renderToString(Counterstr({counter:1,news:news,pageNum:num,lastPage:lastPage})),
        counter:1,
        pageNum:parseInt(num,10),
        news:news,
        lastPage:lastPage
      })
    })
    // article.find({
    //   skip:pn,
    //   fields:{
    //     id:true,
    //     time:true,
    //     title:true,
    //     summary:true
    //   },
    //   limit:10
    // },function(err,data){
    //   if(err){
    //     res.json(err);
    //   }
    //   else{
    //         console.log('data',data);
    //         res.render('index',{
    //           react:ReactDOM.renderToString(Counterstr({counter:1,news:data})),
    //           counter:1,
    //           news:data
    //         });
    //   }
    // })
  });

  router.get('/edit',function(req,res){
    res.render('edit');
  });

  router.post('/uploadImg',routerHandle.uploadImg);

  router.get('/detail/:id',function(req,res){
    // console.log('to detail');
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


    function* gen(){
      var data=yield pp(id);
      res.render('detail',{
        react:ReactDOM.renderToString(Detailstr({detail:data})),
        detail:data
      })
    }

    co(gen);
  })


  server.use(router);
};































