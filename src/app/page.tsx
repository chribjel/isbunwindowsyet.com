import Link from "next/link";
import { BunWindowsPercentageChart } from "./BunWindowsTestPercentageChart";
import { data } from "./data";
import { BundowsCountdown } from "./BundowsCountdown";

export default async function Home() {
	const bundowsRelease = {
		date: new Date(
			new Date("2024-03-31T10:30:00.000Z").getTime() + 29 * 60 * 60 * 1000
		),
		tweetId: "1774383702455583052",
	};

	const lastDataPoint = data.at(-1);
	if (!lastDataPoint) {
		throw new Error("No data points");
	}

	return (
		<>
			<main className="flex h-full w-full flex-col items-center justify-center px-2">
				<h1 className="py-4 text-3xl">Is Bun Windows Yet?</h1>
				<Link
					className="flex flex-col items-center justify-center"
					href={`https://x.com/i/status/${bundowsRelease.tweetId}`}
					target="_blank"
				>
					<BundowsCountdown releaseDate={bundowsRelease.date} />
					<span className="text-xs">(click me for source)</span>
				</Link>
				<Link
					className="pt-2 font-bold"
					href={`https://twitter.com/i/status/${lastDataPoint.tweetId}`}
					target="_blank"
				>
					{lastDataPoint.percentage}%
				</Link>
				<div className="flex h-full w-full items-center justify-center">
					<BunWindowsPercentageChart data={data} />
				</div>
			</main>
		</>
	);
}
