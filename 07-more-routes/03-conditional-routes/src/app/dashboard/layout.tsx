export default function RootLayout({
	children,
	users,
	revenue,
	notifications,
	login,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode;
	login: React.ReactNode;
}) {
	const isLoggedIn = false;
	return isLoggedIn ? (
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
	) : (
		<div>{login}</div>
	);
}
