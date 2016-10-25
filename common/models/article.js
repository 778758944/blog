module.exports = function(Article) {
	Article.getArticleItem=function(start,offset,cb){
		Article.find({
			fields:{
				title:true,
				time:true,
				summary:true,
				content:false
			},
			limit:offset,
			skip:start,
			order:'time ASC'
		},function(err,data){
			if(err){
				cb(err);
			}
			else{
				cb(null,{code:200,data:data,msg:'success'});
			}
		})
	}

	Article.remoteMethod('getArticleItem',{
		accepts:[
			{arg:"start",type:"number"},
			{arg:"offset",type:'number'}
		],
		returns:{root:true},
		http:{arg:'/getArticleItem',verb:"post"}
	})


	Article.createNews=function(title,summary,content,time,cb){
		if(title && summary && content && time){
			var newData={
				title:title,
				summary:summary,
				content:content,
				time:time
			}
			Article.create(newData,function(err,data){
				if(err){
					cb(err);
				}
				else{
					cb(null,200,data,'success');
				}
			})
		}
		else{
			cb(null,0,{},'缺少数据');
		}
	}

	Article.remoteMethod('createNews',{
		accepts:[
			{arg:'title',type:"string"},
			{arg:"summary",type:"string"},
			{arg:'content',type:"string"},
			{arg:"time",type:"number"}
		],
		returns:[
			{arg:"code",type:"number"},
			{arg:"data",type:"object"},
			{arg:"msg",type:"string"}
		],
		http:{arg:'/createNews',verb:"post"}
	})
};





















