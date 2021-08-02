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

			const loadedPosts = [];

			for (const key in data) {
				loadedPosts.push({
					id: key,
					title: data[key].title,
					body: data[key].body,
					author: data[key].author,
				});
			}

			dispatch(fetchDataSuccess(loadedPosts));
		} catch (error) {
			dispatch(fetchDataFailure(error));
		}
	};
};

// Redux Thunk Post Data Action
export const fetchPostData = (postItem, history) => {
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

			if (!response.ok) {
				throw new Error("Oops Something Went Wrong...");
			}
			// For now do nothing
			const data = await response.json();

			// When The Data is Updated Successfuly Go to Home Page
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};
};

export default getPostReducer;
