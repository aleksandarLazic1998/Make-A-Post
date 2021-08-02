import React from "react";
import { useDispatch } from "react-redux";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { fetchPostData } from "../../redux/ducks/fetch-post";
import { useHistory } from "react-router";

const NewPost = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const onSubmitPost = (postSubmited) => {
		dispatch(fetchPostData(postSubmited, history));
	};

	return (
		<div>
			<NewPostForm onSubmitPost={onSubmitPost} />
		</div>
	);
};

export default NewPost;
