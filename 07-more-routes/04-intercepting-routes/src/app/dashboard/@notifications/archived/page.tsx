import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotifications = () => {
	return (
		<Card>
			<div>ArchivedNotifications</div>
			<Link href="/dashboard">Default</Link>
		</Card>
	);
};

export default ArchivedNotifications;
