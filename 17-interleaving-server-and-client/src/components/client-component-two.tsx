"use client";

import { useState } from "react";

const CLientComponentTwo = () => {
	const [name, setName] = useState("Batman");
	return <div>Client Component Two</div>;
};

export default CLientComponentTwo;
