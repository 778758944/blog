/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 15:52:12
 * @version $Id$
 */
import React,{Component} from 'react'
import {render} from 'react-dom'
import {LeftBar} from './leftbar'

require('../style/reset.css');
require('../style/main.css');


class Detail extends Component{
	constructor(props){
		super(props);
	}
	render(){
		// var detail=this.props.detail;
		return (
			<div className='all_wrap'>
				<LeftBar/>
				<div className='itemoutwrap'>
					<h1>jajajaj</h1>
				</div>
			</div>
			)
	}
}

export default Detail;








































