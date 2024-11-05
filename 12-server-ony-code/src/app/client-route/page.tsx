"use client";

import { serverSideFunction } from "@/utils/server-utils";

const ClientRoutePage = () => {
	console.log("client route render");
	const result = serverSideFunction();
	return (
		<div>
			<h1>ClientRoutePage</h1>
			<p>{result}</p>
		</div>
	);
};

export default ClientRoutePage;
