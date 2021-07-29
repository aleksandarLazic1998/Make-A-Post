import React from "react";
import PostComponent from "../../components/PostComponent/PostComponent";

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
	return (
		<div>
			<h1>List of Posts</h1>
			<ul>
				{dummyData.map((post) => {
					return <PostComponent key={post.id} {...post} />;
				})}
			</ul>
		</div>
	);
};

export default PostsList;
