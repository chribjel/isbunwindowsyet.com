import { env } from "@/env.mjs";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<p>Write code now! {env.VERCEL_URL ?? "No Vercel URL"}</p>
		</main>
	);
}
