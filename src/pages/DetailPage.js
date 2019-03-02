import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import component
import { fetchApiDetailRec } from '../actions/recApiActions';
import { fetchApiDetail } from '../actions/detailApiActions';
import method from '../utils/method';

class DetailPage extends Component {
  state = {
    movies: [],
    recommends: [],
    price: '',
    money: 100000
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchApiDetail(id)
      .then((res) => {
        console.log(res);
        this.setState({
          movies: res.response.data
        })
      })
    
      this.props.fetchApiDetailRec(id)
        .then((res) => {
          console.log(res);
          this.setState({
            recommends: res.response.data.results
          })
        })
  }

  
  render() {
    // console.log(this.state);
    // const urlImg = 'https://image.tmdb.org/t/p/original' + this.state.movies.backdrop_path;
    const posterImage = 'http://image.tmdb.org/t/p/w500';
    this.price = method.checkPrice(this.state.movies.vote_average);

    return (
      <div className="container-detail-page">
        <div className="box-movie">
          <img className="float-left" src={posterImage + this.state.movies.poster_path} alt={this.state.movies.title} style={{height: '550px'}} />
          <div className="movie-detail">
            <div className="movie-title">{this.state.movies.title}</div>
            <div className="movie-tagline">{this.state.movies.tagline}</div>
            <div className="movie-overview">{this.state.movies.overview}</div>
            <div className="movie-overview-bot">Cast:</div>
            <div className="movie-tagline-bot">BAGIAN INI MASIH ERROR</div>
            <div className="container-bot">
              <div className="float-left-bot">
                <div className="movie-overview-bot">Running Time</div>
                <div className="movie-tagline-bot">{this.state.movies.runtime} mins</div>
                <div className="movie-overview-bot">Harga</div>
                <div className="movie-tagline-bot">Rp {this.price}</div>
              </div>
              <div className="float-left-bot">
                <div className="movie-overview-bot">Rating</div>
                <div className="movie-tagline-bot">{this.state.movies.vote_average} / 10</div>
                <div className="movie-overview-bot">Purchased</div>
                <button className="btn red btn-purchase">Not Yet</button>
              </div>
              <div className="float-left-bot btn-buy">
                <button className="btn disabled">Rp {this.state.money}
                  <i className="material-icons left">account_balance_wallet</i>
                </button>
                <button className="btn waves-effect waves-light mrgn" type="submit" name="action">BUY
                  <i className="material-icons left">shopping_cart </i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-rec-card">
          <div style={{fontSize: '100px'}}>Recommendation</div>
          <div className="flex-card">
            {this.state.recommends && this.state.recommends.map((recomm) => {
              return (
                <Link to={'/' + recomm.id + '/' + recomm.title.replace(/\s+/g, '-')} key={recomm.id}>              
                  <div className="card hoverable" style={{width: '250px', height: '550px'}}>
                    <div className="card-image">
                      <img src={posterImage + recomm.poster_path} alt={recomm.title} style={{width: '250px', heigth: '550px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
                    </div>
                    <div className="card-content">
                      <p className='style-text'>{recomm.title}</p>
                      <i className='bx bxs-star bx-gold top-pos'><span className="margin-left">{recomm.vote_average}</span></i><br />
                      <button className="btn t-green">Rp {this.price}</button>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiDetail: (endpoint) => dispatch(fetchApiDetail(endpoint)),
    fetchApiDetailRec: (endpoint) => dispatch(fetchApiDetailRec(endpoint))
  }
}

export default connect(null, mapDispatchToProps) (DetailPage);
