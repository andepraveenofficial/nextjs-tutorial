import Link from "next/link";
import React from "react";

const SecondBlog = () => {
	return (
		<div>
			<Link href="/blog">Blog</Link>
			<br />
			<h1>I am SecondBlog</h1>
		</div>
	);
};

export default SecondBlog;
