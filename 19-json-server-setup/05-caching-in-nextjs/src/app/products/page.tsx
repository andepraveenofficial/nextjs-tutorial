import "./styles.css";
type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
};

const ProductPage = async () => {
	// Revalidation
	const response = await fetch("http://localhost:5000/products", {
		next: {
			revalidate: 10,
		},
	});
	const products = await response.json();
	console.log(products);
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
		</div>
	);
};

export default ProductPage;
