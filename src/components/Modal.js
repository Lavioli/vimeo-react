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
		    	<div className="video">
		    		<iframe 
		    			src={"https://player.vimeo.com/video/" + this.props.result.id} 
		    			frameBorder="0"
		    			allowFullScreen
		    		/>
		    	</div>
		    	<div className="info">
			    	<div>
			    		<a 
			    			className="user_url" 
			    			href={this.props.result.user_url} 
			    			target="_blank">
			    				<img 
			    					src={this.props.result.user_portrait_medium}
			    					alt="user thumbnail"
			    				/>
			    		</a>
			    		<div className="user_info">
			    			<div className="user_name">
			    				<a 
				    				className="user_url" 
				    				href={this.props.result.user_url} 
				    				target="_blank"
				    			>
			    					{this.props.result.user_name}
			    				</a>
			    			</div>
			    			<div className="upload_date">
			    				<span>Uploaded on: </span>
			    				{this.props.result.upload_date}
			    			</div>
			    		</div>
			    	</div>
			    	<h3>{this.props.result.title}</h3>
					<h2>Description</h2>
					<p dangerouslySetInnerHTML={{ __html: this.props.result.description }}></p>
					{(this.props.result.tags) ? <div><h2>Tags</h2><p>{this.props.result.tags}</p></div> : ''}
					<p>
						<button 
							className="close_button" 
							onClick={e => this.close(e)}
						>
							Close
						</button>
					</p>
				</div>
		    </div>
		    <div 
		    	className="backdrop" 
		    	onClick={e => this.close(e)}
		    ></div>
		  </div>
		)
	}

}

export default Modal;
