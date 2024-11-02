"use client";

const ErrorBoundary = ({ error }: { error: Error }) => {
	return (
		<div>
			<p>I am ErrorBoundary and Error in ReviewId</p>
			<p>{error.message}</p>
		</div>
	);
};

export default ErrorBoundary;
