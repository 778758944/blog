/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 15:57:31
 * @version $Id$
 */
export function addComment(delay){
	return (dispatch)=>{
		setTimeout(function(){
			dispatch('add');
		},delay)
	}
}

