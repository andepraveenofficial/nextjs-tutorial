"use client";

import { useState } from "react";

const CLientComponentOne = () => {
	const [name, setName] = useState("Batman");
	return <div>Client Component One</div>;
};

export default CLientComponentOne;
