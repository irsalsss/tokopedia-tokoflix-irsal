import { combineReducers } from 'redux';

// import component / pages
import apiReducer from './apiReducer';
import detailApiReducer from './detailApiReducer';
import recApiReducer from './recApiReducer';

const rootReducer = combineReducers({
  fetchApi: apiReducer,
  fetchDetailApi: detailApiReducer,
  fetchRecApi: recApiReducer
})

export default rootReducer;