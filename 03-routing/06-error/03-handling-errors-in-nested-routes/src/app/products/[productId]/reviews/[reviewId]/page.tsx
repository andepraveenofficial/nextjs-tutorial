const ReviewDetails = ({
	params,
}: {
	params: { productId: string; reviewId: string };
}) => {
	const { reviewId, productId } = params;

	const random = Math.floor(Math.random() * 2);

	if (random === 1) {
		throw new Error("I am Error Message from review");
	}

	return (
		<div>
			Review {reviewId} for product {productId}
		</div>
	);
};

export default ReviewDetails;
