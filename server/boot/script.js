/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-23 12:00:52
 * @version $Id$
 */
module.exports=function(app){
	var db=app.dataSources.mongodb;

	var Article=app.models.article;

	var data=[
		{
			title:"10月走强大牛股的特征",
			time:new Date().getTime(),
			content:"abcd",
			summary:'昨天地产股、券商护盘，今天保险护盘，权重股是轮番出动，但是小盘股氛围非常弱，安德利昨天涨停，今天又跌停了，这种走势非常恶心，但是你也没办法改变',
		},
		{
			title:"莫让“阿大葱油饼”成为行将逝去的记忆",
			time:new Date().getTime(),
			content:"abcd",
			summary:'号称凌晨三四点就有人开始排队、名气大到BBC也来拍摄纪录片的“阿大葱油饼”摊上大事了。近日，记者从相关部门获悉，由于无证照经营的问题，“阿大”（原名吴根城，因在家里排行老大，大家都叫他“阿大”）已被上海市黄浦区监管部门约谈，责令其立即停业。如果无法办理相关证照，很可能将被取缔。（9月27日澎湃新闻网）',
		}
	];

	// Article.create(data,function(err,data){
	// 	if(err){
	// 		console.log(err);
	// 	}
	// 	else{
	// 		console.log(data);
	// 	}
	// })




	// var tables=['User','AccessToken','ACL','RoleMapping','Role'];

	// db.automigrate(tables,function(err){
	// 	if(err){
	// 		console.log(err);
	// 	}
	// 	else{
	// 		console.log('loopback tables created',db.adapter.name);
	// 		db.disconnect();
	// 	}
	// })

	// db.automigrate('article',function(err){
	// 	if(err){
	// 		console.log(err);
	// 	}
	// 	else{
	// 		console.log('success');
	// 	}
	// })



}
