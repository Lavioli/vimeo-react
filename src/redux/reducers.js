import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
	channelData: null,
	error: null,
	comments: null
}

export default handleActions (
	{
		[actions.fetchChannelSuccess]: (state, action) => {
			return {...state, channelData: action.payload}
		},
		[actions.fetchChannelError]: (state, action) => {
			return {...state, error: action.payload}
		},
		[actions.fetchCommentsSuccess]: (state, action) => {
			return {...state, comments: action.payload}
		},
		[actions.fetchCommentError]: (state, action) => {
			return {...state, error: action.payload}
		},
		[actions.clearComments]: (state, action) => {
			return {...state, comments: null}
		}
	}, initialState
);