import React from "react";
import { useParams } from "react-router-dom";
import { nameFirstLetter } from "../../shared/nameFirstLetter";
import "./PostDetail.css";

const dummyItems = [
	{
		id: 1,
		author: "Joka Lazic",
		title: "Ovo je jokina price",
		body: "Danas je mnogo vruc dan i bilo je lepo Arandjelovcu",
	},
	{
		id: 2,
		author: "Nenad Bogdanovic",
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

const PostDetail = () => {
	const params = useParams();

	// Id from URL
	const itemId = Number(params.postId);

	// Item That will be rendered
	const foundItem = dummyItems.find((item) => item.id === itemId);

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
