export const fetchCache = "default-cache";

import "./styles.css";
import { cookies } from "next/headers";

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
};

const ProductPage = async () => {
	// const detailsResponse = await fetch("http://localhost:5000/products/1");
	// const details = await detailsResponse.json();

	const response = await fetch("http://localhost:5000/products", {
		cache: "no-store",
	});
	const products = await response.json();
	console.log(products);

	const detailsResponse = await fetch("http://localhost:5000/products/1");
	const details = await detailsResponse.json();

	const cookieStore = await cookies();
	const theme = cookieStore.get("theme");
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
				Product List
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
					>
						<div className="p-6">
							<h2 className="text-xl font-semibold text-gray-900 mb-2">
								{product.title}
							</h2>
							<p className="text-gray-600 mb-4">{product.description}</p>
							<p className="text-lg font-bold text-gray-800">
								${product.price.toFixed(2)}
							</p>
						</div>
					</div>
				))}
			</div>
			<div>
				<h1>{details.title}</h1>
				<p>{details.price}</p>
			</div>
		</div>
	);
};

export default ProductPage;
