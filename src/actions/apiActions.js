import axios from 'axios';

export const fetchApi = (endpoint) => (dispatch, getState) => {
  return axios.get('https://api.themoviedb.org/3/discover/movie?&api_key=00d559fae317a5e2c2d956106b5ad3b0&page=1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=')
    .then((response) => dispatch ({
      type: 'FETCH_API_SUCCESS',
      endpoint,
      response
    }))
}