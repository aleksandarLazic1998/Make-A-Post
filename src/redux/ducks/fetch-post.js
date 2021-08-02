// Action Types
const FETCH_POSTS_ = "fetch_posts_";
const FETCH_POSTS_SUCCESS = "fetch_posts_success";
const FETCH_POSTS_FAILURE = "fetch_posts_failure";

// Action Makers:
// Fetch Data Actio
export const fetchData = () => {
	return {
		type: FETCH_POSTS_,
	};
};

// Fetch Data Successfull
export const fetchDataSuccess = (posts) => {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: posts,
	};
};

// Fetch Data Failure
export const fetchDataFailure = (error) => {
	return {
		type: FETCH_POSTS_FAILURE,
		payload: error,
	};
};

// Initial State
const initialFetchState = {
	loading: false,
	posts: [],
	error: "",
};

const getPostReducer = (state = initialFetchState, action) => {
	switch (action.type) {
		// If the data is fetching
		case "fetch_posts_":
			return {
				...state,
				loading: true,
			};

		// if the data is fetched succesfully
		case "fetch_posts_success":
			return {
				loading: false,
				posts: action.payload,
				error: "",
			};

		// if the data is fetch failed
		case "fetch_posts_failure":
			return {
				loading: false,
				posts: [],
				error: action.payload,
			};

		// if there is some error return initial state
		default:
			return state;
	}
};

// Redux Thunk Fetch Data Action
export const fetchGetData = () => {
	return async (dispatch) => {
		dispatch(fetchData());

		try {
			const response = await fetch(
				"https://react-http-7806d-default-rtdb.europe-west1.firebasedatabase.app/postsList.json"
			);
			const data = await response.json();
			dispatch(fetchDataSuccess(data));
		} catch (error) {
			dispatch(fetchDataFailure(error));
		}
	};
};

export default getPostReducer;
