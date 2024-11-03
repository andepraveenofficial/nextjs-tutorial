export default function ProductDetailsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const random = Math.floor(Math.random() * 2);

	if (random === 1) {
		throw new Error("Error Loading Product");
	}
	return (
		<>
			{children}
			<h2>Features Products</h2>
		</>
	);
}
