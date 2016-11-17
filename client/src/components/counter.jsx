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
	}
	componentDidMount(){
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
							goToPage('mm');
						}}><i>&lt;&lt;</i> 上一页</a>

		var next=pageNum==lastPage ? '':<a className='pnNext' href='javascript:' onClick={()=>{
							// this.initial++;
							goToPage('pp');
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
				</div>
			</div>
			)
	}
}


export default Counter





















































