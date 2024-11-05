import { serverSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
	console.log("Server route rendered");
	const result = serverSideFunction();
	return (
		<div>
			<h1>ServerRoute</h1>
			<p>{result}</p>
		</div>
	);
};

export default ServerRoutePage;
