import getPostReducer from "./ducks/fetch-post";
import postDataReducer from "./ducks/postData";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// Root Reducer
const rootReducer = combineReducers({
	getPosts: getPostReducer,
	postPosts: postDataReducer,
});

// Middlewares
const middlewares = [thunk];

// Redux Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
