/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 15:52:12
 * @version $Id$
 */
import React,{Component} from 'react'
import {render} from 'react-dom'
import {LeftBar} from './leftbar'

// require('../style/reset.css');
// require('../style/main.css');


class Detail extends Component{
	constructor(props){
		super(props);
	}
	shouldComponentUpdate(){
		console.log('update');
		return true;
	}
	render(){
		// var detail=this.props.detail;
		// console.log(this.props);
		var detail=this.props.detail;

		return (
			<div className='all_wrap'>
				<LeftBar/>
				<div className='itemoutwrap'>
					<div className='detailWrap'>
						<div className='articleitem_top'>
							<a href='javascript:' className='articleitem_title'>{detail.title}</a>
							<div className='articleitem_info'>
								<p className='articleitem_time'>{detail.time}</p>
								<p className='articleitem_comment'>5 Comments</p>
							</div>
						</div>
					</div>
					<div className='txtContent' dangerouslySetInnerHTML={{__html:detail.content}}>
					
					</div>
				</div>
			</div>
			)
	}
}

export default Detail;








































