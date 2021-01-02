import {List} from 'immutable';

// Type
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';

// Constant
const initialState = List();
// Action
export const createComment = (data) => ({
	type: ADD_COMMENT_SUCCESS,
	payload: data
});

// Reducer
export default function commentReducer(state = initialState, action){
	switch(action.type){
		case ADD_COMMENT_SUCCESS:
			return state.push(action.payload);
		default:
			return state;
	}
}