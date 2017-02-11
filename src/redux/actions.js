import { createAction } from 'redux-actions';
import data from './vimeo.json';


export const fetchChannelSuccess = createAction('FETCH_CHANNEL_SUCCESS');
export const fetchChannelError = createAction('FETCH_CHANNEL_ERROR');
export const fetchChannel = () => dispatch => dispatch(fetchChannelSuccess(data));

