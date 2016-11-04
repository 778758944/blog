/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 16:07:11
 * @version $Id$
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Detail from '../components/detail.jsx'
import * as DetailActions from '../actions/detail'

// bindActionCreators(DetailActions);



function mapPropsState(state){
	return {
		detail:state.detail
	}
}


function mapAction(dispatch){
	return bindActionCreators(DetailActions,dispatch);
}



export default connect(mapPropsState,mapAction)(Detail);


















