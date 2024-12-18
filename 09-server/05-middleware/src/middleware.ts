import { NextResponse, type NextRequest } from "next/server";

/*
export const middleware = (request: NextRequest) => {
	return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
	matcher: "/profile",
};
*/

/*
// Conditional Statements
export const middleware = (request: NextRequest) => {
	if (request.nextUrl.pathname === "/profile") {
		return NextResponse.redirect(new URL("/", request.url));
	}
};
*/

// Cookies
export const middleware = (request: NextRequest) => {
	const response = NextResponse.next();

	const themePreference = request.cookies.get("theme");

	if (!themePreference) {
		response.cookies.set("theme", "dark");
	}

	response.headers.set("custom-header", "custom-value");

	return response;
};
