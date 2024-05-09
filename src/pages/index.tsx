import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Shows from "../components/Shows";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className="h-screen w-screen text-white font-serif"><div className="flex justify-center">
			<StaticImage alt="krallice logo" src='../images/krallicelogo.png' className="w-1/3" /></div>
			<h1 className="text-center text-2xl mt-4 mb-1">KRALLICE WORLD TOUR 2024</h1>
			<Shows />
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Krallice World Tour 2024</title>;
