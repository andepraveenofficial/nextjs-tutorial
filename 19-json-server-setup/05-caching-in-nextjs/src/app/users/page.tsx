import React from "react";
import "./styles.css";

type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
};

const UsersPage = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store",
	});
	if (!response.ok) throw new Error("Failed to fetch users");

	const users: User[] = await response.json();

	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<h1 className="text-3xl font-bold text-center mb-8">User List</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{users.map((user) => (
					<div
						key={user.id}
						className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
					>
						<h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
						<p className="text-gray-500">@{user.username}</p>
						<div className="mt-4">
							<p className="text-gray-700">
								<span className="font-medium">Email:</span> {user.email}
							</p>
							<p className="text-gray-700">
								<span className="font-medium">Phone:</span> {user.phone}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UsersPage;
