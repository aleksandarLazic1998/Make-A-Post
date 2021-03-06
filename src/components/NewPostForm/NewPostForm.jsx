import React, { useRef, useState } from "react";
import { Prompt } from "react-router";
import "./NewPostForm.css";

const NewPostForm = (props) => {
	const titleRef = useRef();
	const bodyRef = useRef();
	const authorRef = useRef();

	const [formFocus, setFormFocus] = useState(false);

	const handleFocus = () => {
		setFormFocus(true);
	};

	const handleSubmitButton = () => {
		setFormFocus(false);
	};

	// Submit data
	const handleSubmit = (e) => {
		e.preventDefault();

		// Values from body and title input
		const title = titleRef.current.value;
		const body = bodyRef.current.value;
		const author = authorRef.current.value;

		// Post that you should submit to database
		props.onSubmitPost({
			title,
			body,
			author,
		});
	};

	return (
		<div className="new_post">
			<div className="new_post_card">
				<h1>Add Post 🖋️</h1>

				<Prompt
					when={formFocus}
					message={(location) =>
						"You did not submit the form, are you sure that you want to leave>"
					}
				/>
				<div className="new_post_form">
					<form onFocus={handleFocus} onSubmit={handleSubmit}>
						<label htmlFor="title">Add Your Post Title</label>
						<input type="text" id="title" ref={titleRef} />
						<label htmlFor="body">Add Your Post Body</label>
						<input type="text" id="body" ref={bodyRef} />
						<label htmlFor="author">Add Your Name</label>
						<input type="text" id="author" ref={authorRef} />
						<button onClick={handleSubmitButton}>Add Post</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewPostForm;
