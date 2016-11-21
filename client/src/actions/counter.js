/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 14:05:21
 * @version $Id$
 */
export const INCREMENT_COUNTER='INCREMENT_COUNTER'
export const DECREMENT_COUNTER='DECREMENT_COUNTER'
export var pageNum=1
// console.log(pageNum);

export function increment(){
	return {
		type:INCREMENT_COUNTER
	}
}

export function decrement(){
	return {
		type:DECREMENT_COUNTER
	}
}

export function incrementIfOdd(){
	return (dispatch,getState)=>{
		const {counter}=getState();

		if(counter%2 === 0){
			return
		}

		dispatch(increment());

		
	}
}

export function incrementSync(delay=1000){
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment())
		},1000);
	}
}

export function changeNews(data){
	return {
		type:"changeNews",
		data:data
	}
}

export function changePageNum(flag){
	if(flag=='mm'){
		return {
			type:"pageNum_mm"
		}
	}
	else{
		return {
			type:'pageNum_pp'
		}
	}
}

export function setPageNum(num){
	return {
		type:"setPageNum",
		num:num
	}
}

export function goToPage(start,offset){
	var offset=offset || 10;
	var start=start||1;
	// console.log(start);
	// if(start=='mm'){
	// 	pageNum--;
	// }
	// else{
	// 	pageNum++;
	// }
	// console.log(pageNum);
	return (dispatch)=>{
		post('/api/articles/getArticleItem',{start:(start-1)*offset,offset:offset},function(data){
			// location.hash=start+1;
			var state={
				num:start,
				data:data.data
			};

			history.pushState(state,null,start);
			dispatch(setPageNum(start));
			dispatch(changeNews(data.data));
		})
	}
}

export function goToNext(start,offset,news,cb){
	var offset=offset || 10,
		start=start || 1,
		news=news || [];

	return (dispatch)=>{
		post('/api/articles/getArticleItem',{start:(start-1)*offset,offset:offset},function(data){

			// cb && cb();
			if(data.data.length>0){
				cb && cb();
				dispatch(setPageNum(start));
				dispatch(changeNews(news.concat(data.data)));
			}
			else{
				cb && cb();
			}
		})
	}
}































