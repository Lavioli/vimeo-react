import React, {Component} from 'react';
import Modal from './Modal';
import CommentModal from './CommentModal';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			isCommentModalOpen: false
		}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.openCommentModal = this.openCommentModal.bind(this);
		this.closeCommentModal = this.closeCommentModal.bind(this);
	}
	openModal() {
		this.setState({
			isModalOpen: true
		})
	}
	closeModal() {
		this.setState({
			isModalOpen: false
		})
	}
	openCommentModal() {
		this.setState({
			isCommentModalOpen: true
		})
	}
	closeCommentModal() {
		this.props.dispatch(actions.clearComments());
		this.setState({
			isCommentModalOpen: false
		})
	}
	onClickFetchComments(videoId, e) {
		e.preventDefault();
		this.props.dispatch(actions.fetchComments(videoId));
		this.openCommentModal();
	}
	render () {
		return (
			<div className="card">
				<a 
					className="card_url" 
					href={this.props.result.url} 
					target="_blank">
					<img 
						className="card_img" 
						src={this.props.result.thumbnail_large} 
						alt="thumbnail"
					/>
				</a>
				<div className="card_icons">
					<i 
						className="fa fa-heart" 
						aria-hidden="true"
					>
					</i>
					{this.props.result.stats_number_of_likes}
					<i 
						className="fa fa-play-circle" 
						aria-hidden="true"
					>
					</i>
					{this.props.result.stats_number_of_plays}
					<button 
						className="comment_button"
						onClick={this.onClickFetchComments.bind(this, this.props.result.id)}
					>
					<i 
						className="fa fa-comments" 
						aria-hidden="true"
					>
					</i>
					</button>
					{this.props.result.stats_number_of_comments}
				</div>
				<div 
					className="card_title">
					<a 
						className="card_url" 
						href={this.props.result.url} 
						target="_blank"
					>
						{this.props.result.title}
					</a>
				</div>
				<button 
					className="card_button" 
					onClick={this.openModal}
				>
					Read more
				</button>
				<Modal 
					isOpen={this.state.isModalOpen} 
					onClose={this.closeModal} 
					result={this.props.result}
				/>
				{(this.state.isCommentModalOpen === true) ? <CommentModal 
					isOpen={this.state.isCommentModalOpen} 
					onClose={this.closeCommentModal} 
					comments={this.props.comments}
				/> : ''}
			</div>
		);
	}
}

export default connect(
	({ comments }) => ({ comments })
)(Video);