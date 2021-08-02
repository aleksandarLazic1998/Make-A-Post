import React from "react";
import { useDispatch } from "react-redux";
import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { fetchPostData } from "../../redux/ducks/postData";

const NewPost = () => {
	const dispatch = useDispatch();

	const onSubmitPost = (postSubmited) => {
		dispatch(fetchPostData(postSubmited));
	};


	return (
		<div>
			<NewPostForm onSubmitPost={onSubmitPost} />
		</div>
	);
};

export default NewPost;
