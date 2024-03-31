import { ImageResponse } from "next/og";

export default function OpengraphImage() {
	const height = 630;
	const width = 1200;

	return new ImageResponse(
		(
			<div
				style={{
					alignItems: "center",
					backgroundColor: "white",
					display: "flex",
					height: "100%",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<h1
					style={{
						color: "black",
						fontSize: "48px",
						fontWeight: "bold",
						textAlign: "center",
					}}
				>
					Is Bun Windows Yet?
				</h1>
			</div>
		),
		{
			height,
			width,
		}
	);
}
