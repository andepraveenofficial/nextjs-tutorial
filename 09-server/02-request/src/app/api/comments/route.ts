import { comments } from "./data";

export const GET = async () => {
	return Response.json(comments);
};

export const POST = async (request: Request) => {
	const data = await request.json();
	const newComment = {
		id: comments.length + 1,
		text: data.text,
	};
	comments.push(newComment);
	return new Response(JSON.stringify(newComment), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 201,
	});
};
