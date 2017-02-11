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

      )
    })
  }
  render() {
    return (
      <div>
        <header id="logo">React Vimeo</header>
        <div className="results_wrapper">
          {(this.props.channelData) ? this.renderDataArr(this.props.channelData) : ''}
        </div>
      </div>
      
    );
  }
}

export default connect(
  ({channelData, error, hi}) => 
  ({channelData, error, hi})
)(App);
