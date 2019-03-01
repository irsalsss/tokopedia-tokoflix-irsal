import { combineReducers } from 'redux';

// import component / pages
import apiReducer from './apiReducer';
import detailApiReducer from './detailApiReducer';

const rootReducer = combineReducers({
  fetchApi: apiReducer,
  fetchDetailApi: detailApiReducer
})

export default rootReducer;