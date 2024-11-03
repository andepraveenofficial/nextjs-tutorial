"use client";

const ErrorBoundary = ({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) => {
	return (
		<div>
			<p>I am ErrorBoundary and Error in ReviewId</p>
			<p>{error.message}</p>
			<button onClick={reset}>Try again</button>
		</div>
	);
};

export default ErrorBoundary;
