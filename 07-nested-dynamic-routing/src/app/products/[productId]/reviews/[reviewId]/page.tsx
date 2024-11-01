const ReviewDetails = ({
	params,
}: {
	params: { productId: string; reviewId: string };
}) => {
	const { reviewId, productId } = params;
	return (
		<div>
			Review {reviewId} for product {productId}
		</div>
	);
};

export default ReviewDetails;
