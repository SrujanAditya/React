import appReducer from '../reducers/index.js'
import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';

// const initialState = (localStorage['redux-store']) ?
// 	JSON.parse(localStorage['redux-store']) :
// 	{}

// const saveState = () => {
// 	const state = JSON.stringify(store.getState())
//     localStorage['redux-store'] = state
// }

const store = createStore(appReducer,applyMiddleware(thunk));

// store.subscribe(saveState);

export default store;