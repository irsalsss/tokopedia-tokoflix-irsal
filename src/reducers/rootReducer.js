import { combineReducers } from 'redux';

// import component / pages
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
  fetchApi: apiReducer,
});

export default rootReducer;