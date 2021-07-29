import React, { useRef } from "react";

const NewPostForm = () => {
	const titleRef = useRef();
	const bodyRef = useRef();
	const authorRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		// // Values from body and title input
		// const title = titleRef.current.value;
		// const body = bodyRef.current.value;
		// const author = authorRef.current.value;

		// console.log(title, body, author);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='title'>Add Your Post Title</label>
			<input type='text' id='title' ref={titleRef} />
			<label htmlFor='body'>Add Your Post Body</label>
			<input type='text' id='body' ref={bodyRef} />
			<label htmlFor='author'>Add Your Name</label>
			<input type='text' id='author' ref={authorRef} />
			<button>Add Post</button>
		</form>
	);
};

export default NewPostForm;
