import axios from 'axios';

export const fetchCastApi = (moviesid) => (dispatch, getState) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${moviesid}/credits?api_key=00d559fae317a5e2c2d956106b5ad3b0`)
    .then((response) => dispatch({
      type: 'FETCH_API_CAST_SUCCESS',
      moviesid,
      response
    }))
}