import { Metadata } from "next";

type Props = {
	params: { productId: string };
};

export const generateMetadata = ({ params }: Props): Metadata => ({
	title: `Product ${params.productId}`,
});

const ProductDetails = ({ params }: { params: { productId: string } }) => {
	return <div>Details about Product : {params.productId}</div>;
};

export default ProductDetails;
