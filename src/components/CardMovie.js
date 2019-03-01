import React, { Component } from 'react'

class CardMovie extends Component {
  render() {
    const { movie } = this.props;
    const posterImage = 'http://image.tmdb.org/t/p/w500';
    return (
      <div className="card" style={{width: '200px'}}>
        <div className="card-image">
          <img src={posterImage + movie.poster_path} alt={movie.title} style={{width: '200px', heigth: '500px'}} />
          <span className="card-title">{movie.title}</span>
        </div>
        <div className="card-content">
          <p>{movie.title}</p>
        </div>
      </div>
    )
  }
}

export default CardMovie
