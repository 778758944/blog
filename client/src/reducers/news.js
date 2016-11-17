/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-09 17:03:41
 * @version $Id$
 */
import {INCREMENT_COUNTER,DECREMENT_COUNTER} from '../actions/counter'

export default function news(state=[],action){
	switch(action.type){
		case 'changeNews':
			return action.data;
		break;

		case DECREMENT_COUNTER:
			return state;
		break;

		default:
			return state;
	}
}
