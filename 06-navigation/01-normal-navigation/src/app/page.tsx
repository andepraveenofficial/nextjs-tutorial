import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>

			<Link href="/about">Goto About</Link>
			<br />

			<Link href="/profile">Goto Profile</Link>
			<br />

			<Link href="/blog">Goto blog</Link>
			<br />
		</div>
	);
}
