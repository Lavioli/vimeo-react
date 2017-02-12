import { createAction } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import data from './vimeo.json';


export const fetchChannelSuccess = createAction('FETCH_CHANNEL_SUCCESS');
export const fetchChannelError = createAction('FETCH_CHANNEL_ERROR');
export const fetchChannel = () => dispatch => dispatch(fetchChannelSuccess(data));

export const fetchCommentsSuccess = createAction('FETCH_COMMENTS_SUCCESS');
export const fetchCommentsError = createAction('FETCH_COMMENTS_ERROR');
export const fetchComments = (videoId) => dispatch => {
	return fetch('https://api.vimeo.com/videos/' + videoId + '/comments?access_token=e4971e05507ccedc3acc44f2cbec868b&page=1&per_page=100')
	.then(response => response.json().then(json => ({ json, response})))
	.then(({json, response}) => {
		if (response.ok === false) {
		  return Promise.reject(json);
		}
		return json;
	})
	.then(data => {
		return dispatch(fetchCommentsSuccess(data))
	}
		)
	.catch(err => dispatch(fetchCommentsError(err)));
}

export const clearComments = createAction('CLEAR_COMMENTS');