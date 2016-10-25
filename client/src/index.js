/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 14:39:24
 * @version $Id$
 */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
require('./style/reset.css');
require('./style/main.css');
var a='jack';
var store=configureStore(initial)

render(
	<Provider store={store}>
		<App/>
	</Provider>
	,document.getElementById('root'))
