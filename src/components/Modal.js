import React, { Component } from 'react';

class Modal extends Component {
	close(e) {
	  e.preventDefault();
	  if (this.props.onClose) {
	    this.props.onClose();
	  }
	}

	render() {
		if (this.props.isOpen === false) return null;
		return (
		  <div>
		    <div className="modal">
		    	<div>
		    		<a className="user_url" href={this.props.result.user_url} target="_blank"><img src={this.props.result.user_portrait_medium}/></a>
		    		<div className="user_name"><a className="user_url" href={this.props.result.user_url} target="_blank">{this.props.result.user_name}</a></div>
		    		<div className="upload_date"><span>Uploaded on: </span>{this.props.result.upload_date}</div>
		    	</div>
				<h2>Description</h2>
				<p dangerouslySetInnerHTML={{ __html: this.props.result.description }}></p>
				{(this.props.result.tags) ? <div><h2>Tags</h2><p>{this.props.result.tags}</p></div> : ''}
				<p><button className="close_button" onClick={e => this.close(e)}>Close</button></p>
		    </div>
		    <div className="backdrop" onClick={e => this.close(e)}></div>
		  </div>
		)
	}

}

export default Modal;
