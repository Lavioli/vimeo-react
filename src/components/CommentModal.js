import React, { Component } from 'react';
import Comment from './Comment';
import Loading from './Loading';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class CommentModal extends Component {
	close(e) {
	  e.preventDefault();
	  if (this.props.onClose) {
	    this.props.onClose();
	    this.props.dispatch(actions.clearComments());
	  }
	}
	renderDataArr (arr) {
	  return arr.map((e, i) => {
	    return <Comment comment={e} key={i} />
	  })
	}
	render() {
		if (this.props.isOpen === false) return null;
		if (!this.props.comments) return <Loading />;
		return (
		  <div>
		    <div className="modal">
		    	<h2 id="comments_heading">Comments</h2>
		    	{this.renderDataArr(this.props.comments.data)}
		    </div>
		    <div 
		    	className="backdrop" 
		    	onClick={e => this.close(e)}
		    ></div>
		  </div>
		)
	}

}

export default connect()(CommentModal);
