import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import * as actions from "../Redux/actions";
import Main from './Main';

function mapStoreToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const Application = withRouter(connect(mapStoreToProps, mapDispatchToProps)(Main));

export default Application