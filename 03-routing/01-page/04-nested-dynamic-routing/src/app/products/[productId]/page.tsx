const ProductDetails = ({ params }: { params: { productId: string } }) => {
	console.log(params.productId);
	return <div>I am ProductDetails : {params.productId}</div>;
};

export default ProductDetails;
