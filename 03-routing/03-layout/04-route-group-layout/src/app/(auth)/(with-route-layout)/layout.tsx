export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<header
				style={{ backgroundColor: "lightgrey", padding: "5px", margin: "5px" }}
			>
				<p>Auth Header</p>
			</header>
			{children}
			<footer
				style={{ backgroundColor: "darkgrey", padding: "5px", margin: "5px" }}
			>
				<p>Auth Footer</p>
			</footer>
		</>
	);
}
