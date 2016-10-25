/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 13:44:58
 * @version $Id$
 */
import React from 'react'
import {LeftBar,ArticleItem} from './leftbar'

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.state={
			news:[]
		}
	}
	componentDidMount(){
		post('/api/articles/getArticleItem',{start:0,offset:10},function(res){
			var data=res.data;
			// this.setState({
			// 	news:data
			// })
		}.bind(this));
	}
	render(){
		const {increment,incrementIfOdd,incrementSync,decrement,counter,news}=this.props;
		console.log(news);
		var items=this.props.news.map(function(ele,index){
			return <ArticleItem title={ele.title} summary={ele.summary} key={index} time={ele.time}/>
		})

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
				</div>
			</div>
			)
	}
}


export default Counter





















































