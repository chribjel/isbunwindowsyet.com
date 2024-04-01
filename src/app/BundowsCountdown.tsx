"use client";

import { useCallback, useEffect, useState } from "react";

export function BundowsCountdown(props: { releaseDate: Date }) {
	const [timeLeft, setTimeLeft] = useState(() => {
		const now = new Date();
		const diff = props.releaseDate.getTime() - now.getTime();
		return diff > 0 ? diff : 0;
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const diff = props.releaseDate.getTime() - now.getTime();
			setTimeLeft(diff > 0 ? diff : 0);
		}, 1000);

		return () => clearInterval(interval);
	}, [props.releaseDate]);

	const calculateTime = useCallback(() => {
		let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

		if (timeLeft < 24 * 60 * 60 * 1000) {
			days = 0;
		}

		return { days, hours, minutes, seconds };
	}, [timeLeft]); // Add timeLeft as a dependency

	const { days, hours, minutes, seconds } = calculateTime();

	return (
		<div className="relative flex gap-2">
			<div className="flex flex-col items-center">
				<div
					suppressHydrationWarning
					className="text-4xl font-bold"
				>
					{days}
				</div>
				<div className="text-sm">days</div>
			</div>
			<div className="flex flex-col items-center">
				<div
					suppressHydrationWarning
					className="text-4xl font-bold"
				>
					{hours}
				</div>
				<div className="text-sm">hours</div>
			</div>
			<div className="flex flex-col items-center">
				<div
					suppressHydrationWarning
					className="text-4xl font-bold"
				>
					{minutes}
				</div>
				<div className="text-sm">minutes</div>
			</div>
			<div className="flex flex-col items-center">
				<div
					suppressHydrationWarning
					className="text-4xl font-bold"
				>
					{seconds}
				</div>
				<div className="text-sm">seconds</div>
			</div>
		</div>
	);
}
