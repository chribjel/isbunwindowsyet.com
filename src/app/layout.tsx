import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { env } from "@/env.mjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bun Windows test %",
	description: "How many percentage of the tests pass for Bun for Windows?",
	metadataBase:
		env.VERCEL_ENV === "production"
			? new URL("https://www.isbunwindowsyet.com")
			: env.VERCEL_ENV === "development"
				? new URL("http://localhost:3000")
				: undefined,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
