import { combineReducers } from 'redux';
import todos from './ToDos';
import visibilityFilter from './VisibilityFilter';

export default combineReducers({
    todos,
    visibilityFilter
});
