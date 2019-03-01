import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApiDetail } from '../actions/detailApiActions';

class DetailPage extends Component {
  state = {
    movies: {}
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchApiDetail(id)
      .then((res) => {
        // console.log(res);
        this.setState({
          movies: res.response.data
        })
      })
  }

  
  render() {
    console.log(this.state);
    // const urlImg = 'https://image.tmdb.org/t/p/original' + this.state.movies.backdrop_path;
    // style={{backgroundColor: 'black', height: '100vp', width: '100vp'}}
    const posterImage = 'http://image.tmdb.org/t/p/w500';

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
                <div className="movie-tagline-bot">Rp 100.000</div>
              </div>
              <div className="float-left-bot">
                <div className="movie-overview-bot">Rating</div>
                <div className="movie-tagline-bot">{this.state.movies.vote_average} / 10</div>
                <div className="movie-overview-bot">Purchased</div>
                <button className="btn red btn-purchase">Not Yet</button>
              </div>
              <div className="float-left-bot btn-buy">
                <button className="btn disabled">Rp 100.000
                  <i className="material-icons left">account_balance_wallet</i>
                </button>
                <button className="btn waves-effect waves-light mrgn" type="submit" name="action">BUY
                  <i className="material-icons left">shopping_cart </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiDetail: (endpoint) => dispatch(fetchApiDetail(endpoint))
  }
}
export default connect(null, mapDispatchToProps) (DetailPage);
