import Link from "next/link";
import React from "react";

const FirstBlog = () => {
	return (
		<div>
			<Link href="/blog">Blog</Link>
			<br />
			<h1>I am FirstBlog</h1>
		</div>
	);
};

export default FirstBlog;
