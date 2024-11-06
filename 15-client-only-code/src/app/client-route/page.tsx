"use client";

import { clientSideFunction } from "@/utils/client-utils";

const ClientRoutePage = () => {
	const result = clientSideFunction();
	console.log(result);
	return <div>ClientRoutePage</div>;
};

export default ClientRoutePage;
