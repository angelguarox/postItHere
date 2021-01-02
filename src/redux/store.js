import {createStore, combineReducers} from 'redux';
import postDuck from './postDuck';
import commentDuck from './commentDuck';

const rootReducers = combineReducers({
	postsStore: postDuck,
	commentsStore: commentDuck
});

export default function generateStore(){
	const store = createStore(rootReducers);
	return store;
}
