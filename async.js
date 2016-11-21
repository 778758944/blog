/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-18 10:20:14
 * @version $Id$
 */
var fs=require('fs');
var readFile=function(fileName){
	return new Promise(function(resolve,reject){
		fs.readFile(fileName,function(err,data){
			if(err){
				reject(err);
			}
			else{
				resolve(data);
			}
		})
	})
}

var asyncReadFile=async function(){
	var f1=await readFile('./a.txt');
	var f2=await readFile('./b.txt');
	console.log(f1.toString());
	console.log(f2.toString());
}











