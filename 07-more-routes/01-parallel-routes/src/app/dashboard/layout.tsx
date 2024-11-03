export default function RootLayout({
	children,
	users,
	revenue,
	notifications,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode;
}) {
	return (
		<>
			<header style={{ backgroundColor: "lightgrey", padding: "5px" }}>
				<p>Dashboard Header</p>
			</header>
			<div>
				<div>{children}</div> {/* Content from page.tsx*/}
				<div style={{ display: "flex" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<div>{users}</div>
						<div>{revenue}</div>
					</div>
					<div style={{ display: "flex", flex: "1" }}>{notifications}</div>
				</div>
				<footer style={{ backgroundColor: "darkgrey", padding: "5px" }}>
					<p>Dashboard Footer</p>
				</footer>
			</div>
		</>
	);
}
