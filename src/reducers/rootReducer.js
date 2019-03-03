import { combineReducers } from 'redux';

// import component / pages
import apiReducer from './apiReducer';
import detailApiReducer from './detailApiReducer';
import recApiReducer from './recApiReducer';
import similarApiReducer from './similarApiReducer';
import castApiReducer from './castApiReducer';

const rootReducer = combineReducers({
  fetchApi: apiReducer,
  fetchDetailApi: detailApiReducer,
  fetchRecApi: recApiReducer,
  fetchSimApi: similarApiReducer,
  fetchCastApi: castApiReducer
})

export default rootReducer;