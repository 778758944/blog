/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-12 18:22:18
 * @version $Id$
 */

(function(module){
	function showTime(timestamp,lj,isTime){
		var date=new Date(timestamp),
			year=date.getFullYear(),
			mon=date.getMonth()+1>9 ? date.getMonth()+1:'0'+(date.getMonth()+1),
			day=date.getDate()>9 ? date.getDate():'0'+date.getDate(),
			hour=date.getHours()>9 ? date.getHours():'0'+date.getHours(),
			min=date.getMinutes()>9 ? date.getMinutes():'0'+date.getMinutes(),
			sec=date.getSeconds()>9 ? date.getMinutes():'0'+date.getSeconds();

		var l=lj || "-";

		if(isTime){
			return year+l+mon+l+day+' '+hour+':'+min+":"+sec;
		}
		else{
			return year+l+mon+l+day;
		}

	}

	module.exports=showTime;



	// window.showTime=showTime;
})(module)
