"use client";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export function Confetti() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}, []);

	return (
		<ReactConfetti
			width={width}
			height={height}
		/>
	);
}
