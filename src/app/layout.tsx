import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { env } from "@/env.mjs";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Is Bun Windows Yet?",
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
			<body className={cn(inter.className, "flex h-svh w-full flex-col")}>
				{children}
				<footer className="flex w-full flex-col items-center justify-center gap-2 p-2 text-sm text-gray-600 sm:flex-row sm:gap-8">
					<Link
						className="font-bold hover:text-purple-600"
						href="https://x.com/chribjel"
						target="_blank"
					>
						Follow me on X (chribjel)
					</Link>
					<p className="font-bold">
						Created by{" "}
						<Link
							className="font-bold hover:text-purple-600"
							href="https://www.bjel.ke"
							target="_blank"
						>
							Christoffer Bjelke
						</Link>
					</p>
					<Link
						className="font-bold hover:text-purple-600"
						href="https://github.com/chribjel/isbunwindowsyet.com"
						target="_blank"
					>
						View source on GitHub
					</Link>
				</footer>
				<Analytics />
			</body>
		</html>
	);
}
