import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/posts'>Posts</Link>
				</li>
				<li>
					<Link to='/new-post'>New Post</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
