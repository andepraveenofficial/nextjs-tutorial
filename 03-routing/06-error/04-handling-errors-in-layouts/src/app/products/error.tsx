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
			<p>I am ErrorBoundary and Error in product</p>
			<p>{error.message}</p>
			<button onClick={reset}>Try again</button>
		</div>
	);
};

export default ErrorBoundary;
