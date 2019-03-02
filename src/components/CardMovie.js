import React, { Component } from 'react'

//import component
import method from '../utils/method';

class CardMovie extends Component {
  state = {
    price: ''
  }

  render() {
    const { movie } = this.props;
    const posterImage = 'http://image.tmdb.org/t/p/w500';
    this.price = method.checkPrice(movie.vote_average);
    return (
      <div className="card hoverable" style={{width: '250px', height: '550px'}}>
        <div className="card-image">
          <img src={posterImage + movie.poster_path} alt={movie.title} style={{width: '250px', heigth: '550px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
        </div>
        <div className="card-content">
          <p className='style-text'>{movie.title}</p>
          <i className='bx bxs-star bx-gold top-pos'><span className="margin-left">{movie.vote_average}</span></i><br />
          <button className="btn t-green">Rp {this.price}</button>
        </div>
      </div>
    )
  }
}

export default CardMovie;
