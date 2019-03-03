import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import component
import { fetchCastApi } from '../actions/apiCast'
import { fetchSimilarApi } from '../actions/similarApiActions';
import { fetchApiDetailRec } from '../actions/recApiActions';
import { fetchApiDetail } from '../actions/detailApiActions';
import method from '../utils/method';

class DetailPage extends Component {
  state = {
    movies: [],
    recommends: [],
    similars: [],
    casts: [],
    price: '',
    purchase: 'Not Yet',
    stylePurchase: '#E50914',
    disable: 'btn waves-effect waves-light mrgn',
    money: 100000
  }

  componentWillMount(){
    localStorage.getItem('money') && this.setState({
      money: JSON.parse(localStorage.getItem('money'))
    })
  }

  handlePurchaseMovie = () => {
    this.price = method.checkPrice(this.state.movies.vote_average);
  
    if (this.state.money > this.price){
      if (window.confirm("Do you really want to buy this movie?")){
        let curMoney = this.state.money - this.price;
        localStorage.setItem('money', JSON.stringify(curMoney))
        return (
          this.setState({ 
            money: curMoney,
            purchase: 'YES',
            stylePurchase: '#44BA43',
            disable: 'btn waves-effect waves-light mrgn disabled',
          })
        )
      }
    } window.alert("Your money is not enough");
  }

  componentDidMount() {
    let id = this.props.match.params.id

    // Get movie Api
    this.props.fetchApiDetail(id)
      .then((res) => {
        // console.log(res);
        this.setState({
          movies: res.response.data
        })
      })
      
    // Get recommended Api
    this.props.fetchApiDetailRec(id)
      .then((res) => {
        this.setState({
          recommends: res.response.data.results
        })
      })

    // Get similar Api
    this.props.fetchSimApi(id)
      .then((res) => {
        this.setState({
          similars: res.response.data.results
        })
      })

    // Get Cast Api
    this.props.fetchCastApi(id)
      .then((res) => {
        this.setState({
          casts: res.response.data.cast.slice(0,3)
        })
      })
  }

  componentDidUpdate(prevProps) {
    if(this.props.location !== prevProps.location){
      this.onRouteChange();
    }
  }

  onRouteChange(){
    let id = this.props.match.params.id;
    console.log(id);

    this.props.fetchApiDetail(id)
      .then((res) => {
        this.setState({
          movies: res.response.data
        })
      })

    // Get recommended Api
    this.props.fetchApiDetailRec(id)
      .then((res) => {
        this.setState({
          recommends: res.response.data.results
        })
      })

    // Get similar Api
    this.props.fetchSimApi(id)
      .then((res) => {
        this.setState({
          similars: res.response.data.results
        })
      })

    // Get Cast Api
    this.props.fetchCastApi(id)
      .then((res) => {
        this.setState({
          casts: res.response.data.cast.slice(0,3)
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
            {this.state.casts.map((cast) => (
              <div key={cast.id} className="movie-tagline-bot block">{cast.name}</div>              
            ))}
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
                <button className="btn btn-purchase" style={{backgroundColor: `${this.state.stylePurchase}`}} >{this.state.purchase}</button>
              </div>
              <div className="float-left-bot btn-buy">
                <button className="btn">Rp {this.state.money}
                  <i className="material-icons left">account_balance_wallet</i>
                </button>
                <button className={this.state.disable} type="submit" name="action" onClick={this.handlePurchaseMovie}>BUY
                  <i className="material-icons left">shopping_cart </i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RECOMMENDATION SECTION */}
        <div className="container-rec-card">
          <div style={{fontSize: '40px', color: 'white', paddingLeft: '50px', marginTop: '50px', backgroundColor: 'black',  }}>Recommended For You</div>
          <div className="flex-card">
            {this.state.recommends && this.state.recommends.map((recomm) => {
              return (
                <Link to={'/' + recomm.id + '/' + recomm.title.replace(/\s+/g, '-')} key={recomm.id}>              
                  <div className="card hoverable" style={{width: '250px', height: '550px'}}>
                    <div className="card-image" style={{height: '375px'}}>
                      <img src={posterImage + recomm.poster_path} alt={recomm.title} style={{width: '250px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
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

        {/* SIMILAR SECTION */}
        <div className="container-rec-card">
          <div style={{fontSize: '40px', color: 'white', paddingLeft: '50px', marginTop: '50px', backgroundColor: 'black',  }}>Similar Movies</div>
          <div className="flex-card">
            {this.state.similars && this.state.similars.map((similar) => {
              return (
                <Link to={'/' + similar.id + '/' + similar.title.replace(/\s+/g, '-')} key={similar.id}>              
                  <div className="card hoverable" style={{width: '250px', height: '550px'}}>
                    <div className="card-image" style={{height: '375px'}}>
                      <img src={posterImage + similar.poster_path} alt={similar.title} style={{width: '250px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
                    </div>
                    <div className="card-content">
                      <p className='style-text'>{similar.title}</p>
                      <i className='bx bxs-star bx-gold top-pos'><span className="margin-left">{similar.vote_average}</span></i><br />
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
    fetchApiDetailRec: (endpoint) => dispatch(fetchApiDetailRec(endpoint)),
    fetchSimApi: (endpoint) => dispatch(fetchSimilarApi(endpoint)),
    fetchCastApi: (endpoint) => dispatch(fetchCastApi(endpoint))
  }
}

export default connect(null, mapDispatchToProps) (DetailPage);
