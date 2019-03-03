import axios from 'axios';

export const fetchSimilarApi = (moviesid) => (dispatch, getState) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${moviesid}/similar?api_key=00d559fae317a5e2c2d956106b5ad3b0&language=en-US&page=1`)
    .then((response) => dispatch ({
      type: 'FETCH_API_SIMILAR_SUCCESS',
      moviesid,
      response
    }))
}