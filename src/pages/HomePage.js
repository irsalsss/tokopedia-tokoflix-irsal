import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import CardMovie from '../components/CardMovie';


class HomePage extends Component {

  state = {
    movies: []
  }

  // get api using axios
  componentDidMount(){
    axios.get(`https://api.themoviedb.org/3/discover/movie?&api_key=00d559fae317a5e2c2d956106b5ad3b0&page=1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`)
    .then((res) => {
      this.setState({
        movies: res.data.results
      })
    })
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="container-card">
        <NavBar />
        {movies && movies.map((movie) => {
          return (            
            <CardMovie movie={movie} key={movie.id} />
          )}
        )}
      </div>           
    )
  }
}

export default HomePage;
