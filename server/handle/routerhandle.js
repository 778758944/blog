/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-10 14:46:30
 * @version $Id$
 */
var formidable=require('formidable');
var loopback=require('loopback');
var path=require('path');
var fs=require('fs');


var uploadImg=function(req,res){
	var form=new formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		if(err){
			res.json(err);
		}
		else{
			// console.log(fields);
			var img=files.wangEditorH5File;
			var img_path=path.resolve(__dirname,'../../client/upload/',img.name);
			var web_path='/upload/'+img.name;
			// console.log(img_path);
			// console.log(web_path);
			var readStream=fs.createReadStream(img.path);
			var writeStream=fs.createWriteStream(img_path);
			readStream.pipe(writeStream);
			res.end(web_path);
		}
	})
}

module.exports={
	uploadImg:uploadImg
}








































