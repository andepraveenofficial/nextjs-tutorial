export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<header style={{ backgroundColor: "lightgrey", padding: "5px" }}>
					<p>Header</p>
				</header>
				{children}
				<footer style={{ backgroundColor: "darkgrey", padding: "5px" }}>
					<p>Footer</p>
				</footer>
			</body>
		</html>
	);
}