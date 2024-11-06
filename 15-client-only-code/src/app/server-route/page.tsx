import { clientSideFunction } from "@/utils/client-utils";

const ServerRoutePage = () => {
	const result = clientSideFunction();
	console.log(result);
	return <div>Server Route Page</div>;
};

export default ServerRoutePage;
