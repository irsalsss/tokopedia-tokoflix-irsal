import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import component / pages
import { fetchApi } from '../actions/apiActions';
import CardMovie from '../components/CardMovie';


class HomePage extends Component {

  state = {
    movies: []
  }

  // get api using axios
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchApi('movies')
      .then((res) => {
        // console.log(res);
        this.setState({
          movies: res.response.data.results
        })
      })
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="container-card">
        <div className="flex-card">
        {movies && movies.map((movie) => {
          return (            
            <Link to={'/' + movie.id + '/' + movie.title} key={movie.id}>
              <CardMovie movie={movie} />
            </Link>
          )}
        )}
        </div>
      </div>           
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApi: (endpoint) => dispatch(fetchApi(endpoint))
  }
}

export default connect(null, mapDispatchToProps)(HomePage);