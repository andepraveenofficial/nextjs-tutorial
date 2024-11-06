import ServerComponentOne from "@/components/server-component-one";

// Server Component
const InterleavingPage = () => {
	return (
		<div>
			<h1>I am InterleavingPage</h1>
			<ServerComponentOne />
		</div>
	);
};

export default InterleavingPage;
