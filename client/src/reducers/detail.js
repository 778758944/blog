/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 16:38:29
 * @version $Id$
 */
export default function DetailReducer(state=[],action){
	switch(action.type){
		case 'add':
		state.comments.push('今天天气真好');
		return state;
		break;

		default:
			return state;
	}
}
