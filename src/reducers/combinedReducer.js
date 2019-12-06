import {combineReducers} from 'redux';
import {studentReducers} from '../reducers/studentReducer';
import {searchReducer} from '../reducers/searchReducer'

export const reducers = combineReducers({
    studentReducers:studentReducers,
    searchReducer:searchReducer
});