/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 13:44:58
 * @version $Id$
 */
import React from 'react'
import {LeftBar,ArticleItem} from './leftbar'
var showTime=require('../lib/timer')

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		}

		this.viewHeight=0;
		this.scrollHeight=0;
		this.scrollTop=0;
		this.items=0;
		this.canGetNews=true;
		this.load=''
	}
	componentDidMount(){
		// console.log(this.load);
		window.addEventListener('popstate',function(e){
			if(!e.state){
				location.reload();
			}
			else{
				var num=e.state.num;
				var data=e.state.data;
				this.props.setPageNum(num);
				this.props.changeNews(data);
			}
		}.bind(this));

		this.viewHeight=document.body.clientHeight;
		this.scrollHeight=document.body.scrollHeight;
		this.items=this.props.news.length;

		window.addEventListener('scroll',function(e){
			var scrollTop=document.body.scrollTop;
			this.viewHeight=document.body.clientHeight;
			if(scrollTop+this.viewHeight>=this.scrollHeight&&this.canGetNews){
				console.log('fetch news');
				this.canGetNews=false;
				// this.load.style.display='block';
				this.props.goToNext(this.props.pageNum+1,10,this.props.news,function(){
					this.load.innerHTML='全部加载完毕';
				}.bind(this));
			}
		}.bind(this))


	}
	componentDidUpdate(){
		this.viewHeight=document.body.clientHeight;
		this.scrollHeight=document.body.scrollHeight;
		this.canGetNews=true;
		// this.load.style.display='none';
	}
	render(){
		const {changeNews,setPageNum,lastPage,pageNum,goToPage,increment,incrementIfOdd,incrementSync,decrement,counter,news}=this.props;
		// console.log(news);
		// console.log(lastPage);
		var items=this.props.news.map(function(ele,index){
			return <ArticleItem title={ele.title} summary={ele.summary} key={index} time={ele.time} id={ele.id}/>
		})

		var prev=pageNum==1 ? '':<a className='pnPrev' href='javascript:' onClick={()=>{
							// this.initial--;
							
							goToPage(pageNum-1);
						}}><i>&lt;&lt;</i> 上一页</a>

		var next=pageNum==lastPage ? '':<a className='pnNext' href='javascript:' onClick={()=>{
							// this.initial++;
							goToPage(pageNum+1);
						}}>下一页 <i>&gt;&gt;</i></a>

		return (
			<div className='all_wrap'>
				<LeftBar/>
				<p style={{display:'none'}}>
					Clicked:{counter} times
					{' '}
					<button onClick={increment}>+</button>
					{' '}
					<button onClick={decrement}>-</button>
					{' '}
					<button onClick={incrementIfOdd}>increment if odd</button>
					{' '}
					<button onClick={incrementSync}>incrementSync</button>
				</p>
				<div className='itemoutwrap'>
					{items}
					<div className='pnWrap'>
						{prev}
						{next}
					</div>
					<div className='loading' ref={(e)=>this.load=e}>
						努力加载中...
					</div>
				</div>
			</div>
			)
	}
}


export default Counter





















































