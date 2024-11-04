import { NextRequest } from "next/server";
import { comments } from "./data";

export const GET = async (request: NextRequest) => {
	console.log("test", request.nextUrl);
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("query");
	const filteredComments = query
		? comments.filter((comment) => comment.text.includes(query))
		: comments;
	return Response.json(filteredComments);
};
