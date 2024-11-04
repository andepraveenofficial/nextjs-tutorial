import { comments } from "../data";

export const GET = async (
	_request: Request,
	context: { params: { id: string } }
) => {
	// Wait for params to be available
	const params = await context.params;
	const comment = comments.find(
		(comment) => comment.id === parseInt(params.id)
	);
	if (!comment) {
		return Response.json({ error: "Comment not found" }, { status: 404 });
	}
	return Response.json(comment);
};

export const PATCH = async (
	request: Request,
	context: { params: { id: string } }
) => {
	// Wait for params to be available
	const params = await context.params;
	const body = await request.json();
	const commentId = parseInt(params.id);
	const { text } = body;

	if (!text) {
		return Response.json({ error: "Text is required" }, { status: 400 });
	}

	const index = comments.findIndex((comment) => comment.id === commentId);
	if (index === -1) {
		return Response.json({ error: "Comment not found" }, { status: 404 });
	}

	comments[index].text = text;
	return Response.json(comments[index]);
};

export const DELETE = async (
	_request: Request,
	context: { params: { id: string } }
) => {
	// Wait for params to be available
	const params = await context.params;

	const commentId = parseInt(params.id);

	const index = comments.findIndex((comment) => comment.id === commentId);
	if (index === -1) {
		return Response.json({ error: "Comment not found" }, { status: 404 });
	}

	const deletedComment = comments.splice(index, 1);

	return Response.json(deletedComment);
};
