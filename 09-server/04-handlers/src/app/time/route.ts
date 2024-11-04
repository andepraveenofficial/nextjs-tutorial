export const dynamic = "force-dynamic"; // It execute each request -> not-caching

export const GET = async () => {
	return Response.json({
		time: new Date().toLocaleTimeString(),
	});
};
