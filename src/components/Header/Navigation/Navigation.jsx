import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<Link to='/posts'>Posts</Link>
			<Link to='/new-posts'>New Post</Link>
		</nav>
	);
};

export default Navigation;
