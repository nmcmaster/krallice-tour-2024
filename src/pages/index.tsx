import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Shows from "../components/Shows";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className="h-screen w-screen text-white font-serif">
			<h1 className="text-center text-2xl">WORLD TOUR 2024</h1>
			<Shows />
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Krallice World Tour 2024</title>;
