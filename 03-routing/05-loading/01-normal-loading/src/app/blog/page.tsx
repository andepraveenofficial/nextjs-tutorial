import Link from "next/link";
import React from "react";

const Blog = () => {
	return (
		<div>
			<Link href="/">Home</Link>
			<br />

			<h1>I am Blog</h1>

			<Link href="/blog/first">Goto First</Link>
			<br />
			<Link href="/blog/second">Goto Second</Link>
			<br />
		</div>
	);
};

export default Blog;
