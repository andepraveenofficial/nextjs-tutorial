"use client";

import { useTheme } from "@/components/theme-provider";

export default function Home() {
	const theme = useTheme();
	return (
		<div style={{ color: theme.colors.secondary }}>
			<h1>Hello World</h1>
		</div>
	);
}
