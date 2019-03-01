const detailApiReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_DETAIL_API_SUCCESS':
      if (action.response){
        return action.response.data
      }
      break;
    default: 
      return state
  }
}

export default detailApiReducer;