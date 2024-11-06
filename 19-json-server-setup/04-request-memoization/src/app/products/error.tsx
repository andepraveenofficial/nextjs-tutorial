"use client";
import { useEffect } from "react";

// Add this at the top to make it a Client Component

const ErrorPage = ({ error }: { error: Error }) => {
	useEffect(() => {
		console.log(`${error}`);
	}, [error]);
	return (
		<div className="flex items-center justify-center min-h-screen bg-red-100">
			<div className="p-6 bg-white border border-red-300 rounded-lg shadow-lg">
				<h1 className="text-2xl font-semibold text-red-600">
					Something went wrong!
				</h1>
				<p className="mt-2 text-gray-700">Please try again later.</p>
			</div>
		</div>
	);
};

export default ErrorPage;
