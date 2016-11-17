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
	if(start=='mm'){
		pageNum--;
	}
	else{
		pageNum++;
	}
	// console.log(pageNum);
	return (dispatch)=>{
		post('/api/articles/getArticleItem',{start:(pageNum-1)*offset,offset:offset},function(data){
			// location.hash=start+1;
			var state={
				num:pageNum,
				data:data.data
			};

			history.pushState(state,null,pageNum);
			dispatch(changePageNum(start));
			dispatch(changeNews(data.data));
		})
	}
}































