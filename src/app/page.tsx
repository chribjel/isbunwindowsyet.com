import { BunWindowsPercentageChart } from "./BunWindowsTestPercentageChart";
import { data } from "./data";

export default function Home() {
	return (
		<>
			<main className="flex h-full w-full flex-col items-center justify-center">
				<h1 className="py-4 text-3xl">Is Bun Windows Yet?</h1>
				<div className="flex h-full w-full items-center justify-center">
					<BunWindowsPercentageChart data={data} />
				</div>
			</main>
		</>
	);
}
