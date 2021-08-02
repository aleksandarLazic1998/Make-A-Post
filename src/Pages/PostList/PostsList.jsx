import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import PostComponent from "../../components/PostComponent/PostComponent";
import { fetchGetData } from "../../redux/ducks/fetch-post";
import "./PostList.css";

const PostsList = () => {
	// State That We Receive From Redux Store
	const { getPosts } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		// Check For Data Changing
		dispatch(fetchGetData());
	}, [dispatch]);

	return (
		<div className="post_list">
			<h1>List of Posts</h1>
			<ul>
				{getPosts.posts.map((post) => {
					return <PostComponent key={post.id} {...post} />;
				})}
			</ul>
		</div>
	);
};

export default PostsList;
