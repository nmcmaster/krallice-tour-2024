import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Shows from "../components/Shows";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className="h-screen w-screen text-white font-serif">
			<div className="flex justify-center">
				<StaticImage
					alt="krallice logo"
					src="../images/krallicelogo.png"
					className="sm:w-1/2 sm:mx-0 mx-3 w-full"
				/>
			</div>
			<h1 className="text-center text-2xl mt-4 mb-1">
				KRALLICE WORLD TOUR 2024
			</h1>
			<Shows />
			<div className="flex justify-center mt-8">
				<StaticImage
					alt="philly poster"
					src="../images/phillyposter.jpg"
					className="sm:w-1/2 sm:mx-0 mx-3 w-full"
				/>
			</div>
			<div className="flex justify-center mt-8">
				<StaticImage
					alt="portland poster"
					src="../images/portland.jpg"
					className="sm:w-1/2 sm:mx-0 mx-3 w-full"
				/>
			</div>
			<div className="flex justify-center mt-8 pb-5">
				<StaticImage
					alt="tour poster"
					src="../images/poster.jpg"
					className="sm:w-1/2 sm:mx-0 mx-3 w-full"
				/>
			</div>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Krallice World Tour 2024</title>;
