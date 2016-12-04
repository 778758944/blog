/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 15:52:12
 * @version $Id$
 */
import React,{Component} from 'react'
import {LeftBar} from './leftbar'
var showTime=require('../lib/timer')

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
		var showtime=showTime(detail.time);

		return (
			<div className='all_wrap'>
				<LeftBar/>
				<div className='itemoutwrap'>
					<div className='detailWrap'>
						<div className='articleitem_top'>
							<div className='articleitem_info'>
								<p className='articleitem_time'>{showtime}</p>
								<p className='articleitem_comment'>5 Comments</p>
							</div>
							<a href='javascript:' className='articleitem_title'>{detail.title}</a>
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








































