/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-29 15:04:30
 * @version $Id$
 */
import React,{Component} from 'react'
var showTime=require('../lib/timer')

// var leftbar_img=require('../images/left-bg2.jpg');

class LeftBar extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='leftBar_wrap'>
				<a className='img_wrap' href='http://www.baidu.com'></a>
				<h1><a className='left_name' href='http://www.baidu.com'>Jerry Qu</a></h1>
				<p className='left_zym'>专注web端开发</p>
				<ul className='left_mulu'>
					<li><a href=''>首页</a></li>
					<li><a href=''>专题</a></li>
					<li><a href=''>归档</a></li>
					<li><a href=''>友链</a></li>
					<li><a href=''>关于</a></li>
				</ul>
				<div className='dot_wrap'>
					<a href=''></a>
					<a href=''></a>
					<a href=''></a>
				</div>
			</div>
			)
	}
}

class ArticleItem extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var showtime=showTime(this.props.time);
		return (
			<div className='articleitem_wrap'>
				<div className='articleitem_top'>
					<a href={'/detail/'+this.props.id} className='articleitem_title'>{this.props.title}</a>
					<div className='articleitem_info'>
						<p className='articleitem_time'>{showtime}</p>
						<p className='articleitem_comment'>5 Comments</p>
					</div>
				</div>
				<p className='sub_content'>
					{this.props.summary}
				</p>
				<a href={'/detail/'+this.props.id} className='readMore'>继续阅读&gt;&gt;</a>
			</div>
			)
	}
}

export {LeftBar,ArticleItem}

































