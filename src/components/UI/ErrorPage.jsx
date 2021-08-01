import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
	const history = useHistory();

	useEffect(() => {
		const timeout = setTimeout(() => {
			history.push("/");
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [history]);

	return (
		<div className={styles.page}>
			<h1 className={styles.page_h1}>
				Uppps Page That You Entered Is Not Found...
			</h1>
			<p className={styles.page_p}>Click on Home Button To Get To Home Page</p>
			<Link to="/" className={styles.page_link}>
				Home
			</Link>
		</div>
	);
};

export default ErrorPage;
