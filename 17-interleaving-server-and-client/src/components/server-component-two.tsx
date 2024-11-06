import fs from "fs";
import ClientComponentOne from "./client-component-one";

const ServerComponentTwo = () => {
	fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
	return (
		<>
			<h1>Server Component Two</h1>
			<ClientComponentOne />
		</>
	);
};

export default ServerComponentTwo;
