import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import PostComponent from "../../components/PostComponent/PostComponent";
import sortPosts from "../../shared/sort";

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

	return (
		<div>
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
