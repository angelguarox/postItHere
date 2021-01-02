import {fromJS} from 'immutable';

// Type
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const TOGGLE_MODAL = 'TOGGLE_MODAL';

// Constant
const initialState = fromJS({
	posts: [],
	modal: {
		post: {},
		isShow: false
	}
});

// Action
export const createPost = (data) => ({
	type: ADD_POST_SUCCESS,
	payload: data
});

export const showModal = (post) => ({
	type: TOGGLE_MODAL,
	payload: post
});

// Reducer
export default function postReducer(state = initialState, action){
	switch(action.type){
		case ADD_POST_SUCCESS:
			return state.updateIn(['posts'], list => list.push(action.payload));
		case TOGGLE_MODAL:
			const postMap = state.setIn(['modal', 'post'], action.payload);
			const isShowMap = postMap.setIn(['modal', 'isShow'], !postMap.getIn(['modal','isShow']));
			return isShowMap;
		default:
			return state;
	}
}
