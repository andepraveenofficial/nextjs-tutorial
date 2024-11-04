import { redirect } from "next/navigation";
import { comments } from "../data";

export const GET = async (
	_request: Request,
	context: { params: { id: string } }
) => {
	const params = await context.params;

	if (parseInt(params.id) > comments.length) {
		redirect("/api/comments");
	}

	const comment = comments.find(
		(comment) => comment.id === parseInt(params.id)
	);
	if (!comment) {
		return Response.json({ error: "Comment not found" }, { status: 404 });
	}
	return Response.json(comment);
};
