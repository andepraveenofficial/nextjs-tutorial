import {notFound} from "next/navigation";

const ReviewDetails = ({
	params,
}: {
	params: { productId: string; reviewId: string };
}) => {
	const { reviewId, productId } = params;

if (parseInt(reviewId) > 1000) {
	notFound();
}

	return (
		<div>
			Review {reviewId} for product {productId}
		</div>
	);
};

export default ReviewDetails;
