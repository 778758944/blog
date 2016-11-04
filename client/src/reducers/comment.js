/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 16:38:29
 * @version $Id$
 */
export default function DetailReducer(state=[],action){
	// console.log(state);
	switch(action.type){
		case 'add':
		// console.log(state);
		var new_arr=state.slice(0);
		new_arr.push(8);
		console.log('state',state);
		return new_arr
		break;

		default:
			return state;
	}
}
