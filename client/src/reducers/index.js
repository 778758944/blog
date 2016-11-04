/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 14:14:16
 * @version $Id$
 */
import {combineReducers} from 'redux'
import counter from './counter'
import news from './news'
import comment from './comment'
import detail from './detail'

require('../lib/ajax');

const rootReducer=combineReducers({counter,news,comment,detail});

export default rootReducer;
