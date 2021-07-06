import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';

const store = combineReducers(
    { quoteReducer }
);

export default store;