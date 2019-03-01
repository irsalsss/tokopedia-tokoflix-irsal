import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApiDetail } from '../actions/detailApiActions';

class DetailPage extends Component {
  state = {
    movies: []
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
    // console.log(this.state);
    return (
      <div className="" >
        {this.state.movies.title}  
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
