import Link from "next/link";

const Home = () => {
	return (
		<div>
			<h1>I am Home</h1>
			<Link href="/blog">Go to Blog</Link>
			<br />
			<Link href="/products">Go to Products</Link>
		</div>
	);
};

export default Home;
