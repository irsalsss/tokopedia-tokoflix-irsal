const similarApiReducer = (state=[], action) => {
  switch(action.type){
    case 'FETCH_API_SIMILAR_SUCCESS':
      if(action.response){
        return action.response.data
      }
      break;
    default: 
      return state;
  }
}

export default similarApiReducer;