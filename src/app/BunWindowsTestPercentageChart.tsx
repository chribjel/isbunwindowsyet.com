"use client";
import { useMemo } from "react";
import { Chart, type AxisOptions } from "react-charts";
import { Tweet } from "react-tweet";
import { Confetti } from "./Confetti";
import { type BunWindowsPercentage } from "./data";

type Series = {
	label: string;
	data: BunWindowsPercentage[];
};

export function BunWindowsPercentageChart({
	initialHeight,
	initialWidth,
	data,
}: {
	initialHeight?: number;
	initialWidth?: number;
	data: BunWindowsPercentage[];
}) {
	const memoizedData = useMemo(
		(): Series[] => [
			{
				label: "Bun for Windows",
				data,
			},
		],
		[data]
	);

	const primaryAxis = useMemo(
		(): AxisOptions<BunWindowsPercentage> => ({
			getValue: (datum: BunWindowsPercentage) => datum.date,
		}),
		[]
	);

	const secondaryAxes = useMemo(
		(): AxisOptions<BunWindowsPercentage>[] => [
			{
				getValue: (datum: BunWindowsPercentage) => datum.percentage,
				hardMax: 100,
				hardMin: 0,
			},
		],
		[]
	);

	return (
		<>
			{memoizedData.find((s) => s.data.find((d) => d.percentage === 100)) && (
				<Confetti />
			)}
			<Chart
				options={{
					data: memoizedData,
					initialHeight,
					initialWidth,
					// onClickDatum: (datum) => {
					// 	window.open(
					// 		`https://twitter.com/bunjavascript/status/${datum?.originalDatum.tweetId}`,
					// 		"_blank"
					// 	);
					// },
					primaryAxis,
					secondaryAxes,
					tooltip: {
						render: (props) =>
							props.focusedDatum ? (
								<Tweet id={props.focusedDatum.originalDatum.tweetId} />
							) : null,
					},
				}}
			/>
		</>
	);
}
