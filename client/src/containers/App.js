/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 13:59:03
 * @version $Id$
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Counter from '../components/counter.jsx'
import * as CounterActions from '../actions/counter'


// console.log('ssss',bindActionCreators(CounterActions));


function mapStateToProps(state){
	return {
		counter:state.counter,
		news:state.news,
		pageNum:state.pageNum,
		lastPage:state.lastPage
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(CounterActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
