/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 14:25:04
 * @version $Id$
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);

export default function configureStore(initial){
	const store=createStoreWithMiddleware(reducer,initial);
	return store;
}

