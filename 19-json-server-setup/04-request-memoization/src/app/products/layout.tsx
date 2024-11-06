import React from "react";

const Layout = async ({ childern }: { childern: React.ReactNode }) => {
	const productsResponse = await fetch("http://localhost:5000/products");
	const products = await productsResponse.json();
	console.log(products);
	return <>{childern}</>;
};

export default Layout;
