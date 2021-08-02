import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { nameFirstLetter } from "../../shared/nameFirstLetter";
import { fetchGetData } from "../../redux/ducks/fetch-post";
import { useSelector, useDispatch } from "react-redux";
import "./PostDetail.css";

const PostDetail = () => {
	const params = useParams();
	const { getPosts } = useSelector((state) => state);
	const dispatch = useDispatch();

	// // Id from URL
	const itemId = params.postId;
	console.log(itemId);

	useEffect(() => {
		// fetch all posts
		dispatch(fetchGetData());
	}, [dispatch]);

	// // This method will get proper post based on url/:ID
	const foundItem = getPosts.posts.find((item) => item.id === itemId);

	return (
		<div className="post_detail">
			<div className="post_detail_card">
				<h1>{foundItem.title}</h1>
				<p>
					<i>{nameFirstLetter(foundItem.author)}</i>
				</p>
				<p>{foundItem.body}</p>
			</div>
		</div>
	);
};

export default PostDetail;
