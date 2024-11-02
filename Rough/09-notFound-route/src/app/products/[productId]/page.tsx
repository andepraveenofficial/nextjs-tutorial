const ProductDetails = ({ params }: { params: { productId: string } }) => {
	return <div>Details about Product : {params.productId}</div>;
};

export default ProductDetails;
