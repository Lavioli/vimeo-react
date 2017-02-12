import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from './Video';
import Loading from './Loading';
import * as actions from '../redux/actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchChannel());
  }
  fetchComments(e, videoId) {
    e.preventDefault();
    this.props.dispatch(actions.fetchComments(videoId));
  }
  clearComments() {
    this.props.dispatch(actions.clearComments());
  }
  renderDataArr (arr) {
    return arr.map((e, i) => {
      return (
        <Video 
          comments={this.props.comments} 
          result={e} 
          key={i}
          fetchComments={this.fetchComments.bind(this)}
          clearComments={this.clearComments.bind(this)}
        />
      );
    });
  }
  render() {
    if (!this.props.channelData) return <Loading />;
    return (
      <div>
        <header id="logo">React Vimeo</header>
        <div className="results_wrapper">
          {this.renderDataArr(this.props.channelData)}
        </div>
      </div>
    );
  };
};

export default connect(
  ({channelData, error, comments}) => 
  ({channelData, error, comments})
)(App);
