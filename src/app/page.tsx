import { BunWindowsPercentageChart } from "./BunWindowsTestPercentageChart";

export default function Home() {
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<h1 className="pb-4 text-3xl">Bun for Windows test %</h1>
			<div className="h-full w-full">
				<BunWindowsPercentageChart />
			</div>
		</main>
	);
}
