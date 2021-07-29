import React from "react";
import PostComponent from "../../components/PostComponent/PostComponent";

const dummyData = [
	{
		id: 1,
		author: "Aleksandar",
		title: "This is A first Post",
		body: "This is the body of this first post and it have soem text in it",
	},
	{
		id: 2,
		author: "tarMiRicmi",
		title: "This is A Second Post",
		body: "This is the body of this Second post and it have soem text in it",
	},
	{
		id: 3,
		author: "Saban Saulic",
		title: "This is A Third Post",
		body: "This is the body of this Third post and it have soem text in it",
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
