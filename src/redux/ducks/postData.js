// Action Types
const POST_POSTS_ = "post_posts_";
const POST_POSTS_SUCCESS = "post_posts_success";
const POST_POSTS_FAILURE = "post_posts_failure";

// Action Makers:
// Fetch Data Successfull
export const fetchData = () => {
	return {
		type: POST_POSTS_,
	};
};

export const postDataSuccess = (posts) => {
	return {
		type: POST_POSTS_SUCCESS,
		payload: posts,
	};
};

// Fetch Data Failure
export const postDataFailure = (error) => {
	return {
		type: POST_POSTS_FAILURE,
		payload: error,
	};
};

// Initial State
const initialPostState = {
	loading: false,
	posts: [],
	error: "",
};

const postDataReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case "post_posts_":
			return {
				...state,
				loading: true,
			};
		// if the data is fetched succesfully
		case "post_posts_success":
			const newPostArray = state.posts.concat(action.payload);
			return {
				loading: false,
				posts: newPostArray,
				error: "",
			};

		// if the data is fetch failed
		case "post_posts_failure":
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

// Redux Thunk Post Data Action
export const fetchPostData = (postItem) => {
	return async (dispatch) => {
		dispatch(fetchData());
		try {
			const response = await fetch(
				"https://react-http-7806d-default-rtdb.europe-west1.firebasedatabase.app/postsList.json",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(postItem),
				}
			);
			const data = await response.json();
			dispatch(postDataSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export default postDataReducer;
