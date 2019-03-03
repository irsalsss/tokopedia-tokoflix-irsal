import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';

// import component / pages
import { fetchApi } from '../actions/apiActions';
import CardMovie from '../components/CardMovie';

class HomePage extends Component {
  state = {
    movies: []
  }

  render() {
    const { movies } = this.state;
  
    return (
      <div className="container-card">
        <div className="flex-card">
    
          {movies && movies.map((movie) => {
            return (     
              <Link to={'/' + movie.id + '/' + movie.title.replace(/\s+/g, '-')} key={movie.id}>
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