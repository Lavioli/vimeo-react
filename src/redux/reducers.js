import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
	channelData: null,
	error: null,
	hi: 1
}

export default handleActions (
	{
		[actions.fetchChannelSuccess]: (state, action) => {
			return {...state, channelData: action.payload}
		},
		[actions.fetchChannelError]: (state, action) => {
			return {...state, error: action.payload}
		},
	}, initialState
);