export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<header
				style={{ backgroundColor: "lightgrey", padding: "5px", margin: "5px" }}
			>
				<p>Blog Header</p>
			</header>
			{children}
			<footer
				style={{ backgroundColor: "darkgrey", padding: "5px", margin: "5px" }}
			>
				<p>Blog Footer</p>
			</footer>
		</>
	);
}
