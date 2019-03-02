const recApiReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_API_REC_SUCCESS':
      if(action.response){
        return action.response.data
      }
      break;
    default: 
      return state; 
  }
}

export default recApiReducer;