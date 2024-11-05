import { cookies } from "next/headers";

// Server Component
const AboutPage = async () => {
	console.log("About server component");
	const cookieStore = await cookies();
	const theme = cookieStore.get("theme");
	console.log(theme);
	return (
		<div>
			<h1>I am AboutPage {new Date().toLocaleTimeString()}</h1>
		</div>
	);
};

export default AboutPage;
