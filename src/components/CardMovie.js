import React, { Component } from 'react'

class CardMovie extends Component {
  render() {
    const { movie } = this.props;
    const posterImage = 'http://image.tmdb.org/t/p/w500';
    return (
      <div className="card" style={{width: '250px', height: '550px'}}>
        <div className="card-image">
          <img src={posterImage + movie.poster_path} alt={movie.title} style={{width: '250px', heigth: '550px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
        </div>
        <div className="card-content">
          <p className='style-text'>{movie.title}</p>
          <i className='bx bxs-star bx-gold top-pos'><span className="margin-left">{movie.vote_average}</span></i><br />
          <a href="/" className="btn t-green">Rp 100.000</a>
        </div>
      </div>
    )
  }
}

export default CardMovie;
