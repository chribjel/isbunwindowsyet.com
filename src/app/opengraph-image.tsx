import { ImageResponse } from "next/og";
import { BunWindowsPercentageChart } from "./BunWindowsTestPercentageChart";

export default function OpengraphImage() {
	const height = 630;
	const width = 1200;

	return new ImageResponse(
		(
			<BunWindowsPercentageChart
				initialHeight={height}
				initialWidth={width}
			/>
		),
		{
			height,
			width,
		}
	);
}
