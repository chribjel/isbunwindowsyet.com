import Link from "next/link";
import { BunWindowsPercentageChart } from "./BunWindowsTestPercentageChart";

export default function Home() {
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<h1 className="py-4 text-3xl">Is Bun Windows Yet?</h1>
			<div className="h-full w-full">
				<BunWindowsPercentageChart />
			</div>
			<footer className="flex w-full justify-between p-8 text-sm text-gray-600">
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
		</main>
	);
}
