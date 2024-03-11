"use client";
import { useMemo } from "react";
import { Chart } from "react-charts";
import { Tweet } from "react-tweet";

type BunWindowsPercentage = {
	date: Date;
	percentage: number;
	tweetId: string;
};

type Series = {
	label: string;
	data: BunWindowsPercentage[];
};

const data: Series[] = [
	{
		label: "Bun for Windows",
		data: [
			{
				date: new Date("2024-01-10"),
				percentage: 33,
				tweetId: "1745029301588914279",
			},
			{
				date: new Date("2024-01-13"),
				percentage: 41.98,
				tweetId: "1745991798789693711",
			},
			{
				date: new Date("2024-01-23"),
				percentage: 56.69,
				tweetId: "1749657420526420086",
			},
			{
				date: new Date("2024-01-24"),
				percentage: 66.18,
				tweetId: "1750191360660107330",
			},
			{
				date: new Date("2024-01-27"),
				percentage: 69.42,
				tweetId: "1751223179560071340",
			},
			{
				date: new Date("2024-02-01"),
				percentage: 75,
				tweetId: "1753042191185007095",
			},
			{
				date: new Date("2024-02-07"),
				percentage: 80.24,
				tweetId: "1755009844007072106",
			},
			{
				date: new Date("2024-02-08"),
				percentage: 83.17,
				tweetId: "1755390539183304741",
			},
			{
				date: new Date("2024-03-02"),
				percentage: 89.11,
				tweetId: "1763949887811735809",
			},
			{
				date: new Date("2024-03-11"),
				percentage: 91,
				tweetId: "1767211079405375625",
			},
		],
	},
];

export function BunWindowsPercentageChart({
	initialHeight,
	initialWidth,
}: {
	initialHeight?: number;
	initialWidth?: number;
}) {
	const primaryAxis = useMemo(
		() => ({
			getValue: (datum: BunWindowsPercentage) => datum.date,
		}),
		[]
	);

	const secondaryAxes = useMemo(
		() => [
			{
				getValue: (datum: BunWindowsPercentage) => datum.percentage,
			},
		],
		[]
	);

	return (
		<Chart
			options={{
				data,
				initialHeight,
				initialWidth,
				primaryAxis,
				secondaryAxes,
				tooltip: {
					render: (props) => (
						<Tweet
							id={props.focusedDatum?.originalDatum.tweetId}
							apiUrl={undefined}
						/>
					),
				},
			}}
		/>
	);
}
