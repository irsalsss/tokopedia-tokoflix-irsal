import axios from 'axios';

export const fetchApiDetail = (moviesid) => (dispatch, getState) => {
  console.log(moviesid);
  return axios.get(`https://api.themoviedb.org/3/movie/${moviesid}?api_key=00d559fae317a5e2c2d956106b5ad3b0&page=1&language=en-US`)
    .then((response) => dispatch ({
      type: 'FETCH_DETAIL_API_SUCCESS',
      moviesid,
      response
    }))
}