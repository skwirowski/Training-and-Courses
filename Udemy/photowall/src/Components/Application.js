import {connect} from 'react-redux';
import Main from './Main';

function mapStoreToProps(state) {
    return {
        posts: state
    }
}
const Application = connect(mapStoreToProps)(Main);

export default Application