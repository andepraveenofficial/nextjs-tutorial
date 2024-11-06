"use client";
// import { useState } from "react";
import NavLink from "./nav-link";
import NavSearch from "./nav-search";

const Navbar = () => {
	console.log("Navbar rendered");

	// const [search, setSearch] = useState("");
	return (
		<div>
			<NavLink />
			<NavSearch />
		</div>
	);
};

export default Navbar;
