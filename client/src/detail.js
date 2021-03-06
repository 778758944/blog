/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 16:50:48
 * @version $Id$
 */
import React from 'react'
import Detail from './containers/Detail'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {render} from 'ReactDOM'

// console.log(initial);

var store=configureStore(initial);



render(<Provider store={store}><Detail/></Provider>,document.getElementById("root"));


