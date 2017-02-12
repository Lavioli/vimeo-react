import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from './Video';
import * as actions from '../redux/actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchChannel());
  }
  renderDataArr (arr) {
    return arr.map((e, i) => {
      return (
        <Video result={e} key={i} />
      );
    });
  }
  render() {
    if(this.props.channelData) {
      return (
        <div>
          <header id="logo">React Vimeo</header>
          <div className="results_wrapper">
            {this.renderDataArr(this.props.channelData)}
          </div>
        </div>
      )
    } else {
      return (
        <div className="loading">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
        </div>
      );
    }
  }
}

export default connect(
  ({channelData, error, comments}) => 
  ({channelData, error, comments})
)(App);
