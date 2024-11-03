import Link from "next/link";

const F4 = () => {
	return (
		<>
			<h1>F4 Page</h1>
			<div>
				<Link href="/f1/f3">Goto F3</Link>
				<br />
				<Link href="/about">Goto About</Link>
			</div>
		</>
	);
};

export default F4;
