import fs from "fs";
import ServerComponentTwo from "./server-component-two";

const ServerComponentOne = () => {
	fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
	return (
		<>
			<h1>Server Component One</h1>
			<ServerComponentTwo />
		</>
	);
};

export default ServerComponentOne;