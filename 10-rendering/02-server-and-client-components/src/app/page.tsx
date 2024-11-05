import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Hello World</h1>

			<Link href="/about">About</Link>
			<br />
			<Link href="/profile">Profile</Link>
			<br />
			<Link href="/dashboard">Dashboard</Link>
			<br />
		</div>
	);
}
