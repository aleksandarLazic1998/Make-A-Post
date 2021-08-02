import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import PostComponent from "../../components/PostComponent/PostComponent";
import { fetchGetData } from "../../redux/ducks/fetch-post";
import sortPosts from "../../shared/sort";
import "./PostList.css";
const dummyData = [
	{
		id: 1,
		author: "Joka Lazic",
		title: "Ovo je jokina price",
		body: "Danas je mnogo vruc dan i bilo je lepo Arandjelovcu",
	},
	{
		id: 2,
		author: "tarMiRicmi",
		title: "This is A Second Post",
		body: "This is the body of this Second post and it have soem text in it",
	},
	{
		id: 3,
		author: "ACA Lazic",
		title: "Mnogo mi je smor",
		body: "Mnogo mi je smor a ja moram da ucim...",
	},
];

const PostsList = () => {
	const location = useLocation();
	const history = useHistory();

	// This will return object where {sort: "asc"}
	const postParams = new URLSearchParams(location.search);

	// Check if URLSearchParams will return true
	const isSortingAsc = postParams.get("sort") === "asc";

	// Sort Posts based on sortPosts method
	const sortedItems = sortPosts(dummyData, isSortingAsc);

	const handleSort = () => {
		history.push(`/posts?sort=${isSortingAsc ? "desc" : "asc"}`);
	};

	console.log(location);
	const homeRoute = (location.pathname = "/posts");

	// State That We Receive From Redux Store
	const { getPosts } = useSelector((state) => state);
	const dispatch = useDispatch();

	const listData = [];

	useEffect(() => {
		// Check For Data Changing
		dispatch(fetchGetData());

		for (const item in getPosts.posts) {
			listData.push({
				id: item,
				title: getPosts.posts[item].title,
				body: getPosts.posts[item].body,
				author: getPosts.posts[item].author,
			});
		}
	}, [dispatch]);

	console.log(getPosts.posts);
	// const listData = [];
	// listData.concat(state);

	// console.log(listData);

	return (
		<div className='post_list'>
			<button onClick={handleSort}>Sort {isSortingAsc ? "Z-A" : "A-Z"}</button>
			<h1>List of Posts</h1>
			<ul>
				{sortedItems.map((post) => {
					return <PostComponent key={post.id} {...post} />;
				})}
			</ul>
		</div>
	);
};

export default PostsList;
