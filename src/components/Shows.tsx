import React from "react";
import { shows } from "../utils/data";

export default function Shows() {
	return (
		<ul
			role="list"
			className="divide-y divide-white/5 sm:w-1/2 lg:w-1/3 sm:px-0 px-4 mx-auto"
		>
			{shows.map((show) => (
				<li key={show.date} className="py-4">
					<div className="flex items-center gap-x-3">
						<h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
							<span className="mr-1.5">{show.venue}</span> 
							(<a
								href={show.link}
								target="_blank"
								className="text-gray-400 underline"
							>
								TICKETS
							</a>)
							
						</h3>
						<time
							dateTime={show.date}
							className="flex-none text-sm text-gray-500"
						>
							{show.date}
						</time>
					</div>
					<p className="mt-3 truncate text-sm text-gray-500">
						<span className="text-gray-400">{show.cityState}</span>{" "}
					</p>
				</li>
			))}
		</ul>
	);
}
