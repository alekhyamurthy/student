import {combineReducers} from 'redux';
import {studentReducers} from '../reducers/studentReducer';

export const reducers = combineReducers({
    studentReducers:studentReducers
});