import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
	// Read Headers frm incoming request
	const requestHeaders = new Headers(request.headers);
	console.log(requestHeaders.get("Authorization"));

	const headerList = await headers();
	console.log(headerList.get("Authorization"));

	// Cookies
	const theme = request.cookies.get("theme");
	console.log(theme);

	// Anotherway to set cookie
	const cookieStore = await cookies();
	cookieStore.set("mode", "light");
	console.log(cookieStore.get("mode"));

	return new Response("<h1>I am profile GET response</h1>", {
		headers: {
			"Content-Type": "text/html",
			"Set-Cookie": `theme=dark`,
		},
	});
};
