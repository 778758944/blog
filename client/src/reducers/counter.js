/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 14:11:11
 * @version $Id$
 */
import {INCREMENT_COUNTER,DECREMENT_COUNTER} from '../actions/counter'

export default function counter(state=0,action){
	switch(action.type){
		case INCREMENT_COUNTER:
			return state+1;
		break;

		case DECREMENT_COUNTER:
			return state-1;
		break;

		default:
			return state;
	}
}



