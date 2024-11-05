"use client";

import { useState } from "react";

const DashboardPage = () => {
	const [name, setName] = useState("");
	return (
		<div>
			<h1>Dashboard Page</h1>
			<p>Hello, {name}!</p>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
};

export default DashboardPage;
