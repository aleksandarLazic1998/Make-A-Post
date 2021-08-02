import getPostReducer from "./ducks/fetch-post";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// Root Reducer
const rootReducer = combineReducers({
	getPosts: getPostReducer,
});

// Middlewares
const middlewares = [thunk];

// Redux Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
