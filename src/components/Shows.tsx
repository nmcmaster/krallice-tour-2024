import React from "react";

interface Show {
	venue: string;
	link: string;
	date: string;
	address: string;
	cityState: string;
}
const shows: Show[] = [
	{
		venue: "Middle East",
		link: "http://google.com",
		date: "August 7",
		address: "Address",
		cityState: "Cambridge, MA",
	},
	{
		venue: "Space",
		link: "http://google.com",
		date: "August 8",
		address: "Address",
		cityState: "Portland, ME",
	},
	{
		venue: "Alchemy",
		link: "http://google.com",
		date: "August 9",
		address: "Address",
		cityState: "Providence, RI",
	},
	{
		venue: "Space Ballroom",
		link: "http://google.com",
		date: "August 10",
		address: "Address",
		cityState: "New Haven, CT",
	},
	{
		venue: "Trans Pecos",
		link: "http://google.com",
		date: "August 11",
		address: "Address",
		cityState: "Queens, NY",
	},
	{
		venue: "Underground Arts",
		link: "http://google.com",
		date: "August 12",
		address: "Address",
		cityState: "Philadelphia, PA",
	},
	{
		venue: "Cobra Cabana",
		link: "http://google.com",
		date: "August 13",
		address: "Address",
		cityState: "Richmond, VA",
	},
	{
		venue: "Metro",
		link: "http://google.com",
		date: "August 14",
		address: "Address",
		cityState: "Richmond, VA",
	},
	{
		venue: "Preserving Underground",
		link: "http://google.com",
		date: "August 15",
		address: "Address",
		cityState: "Richmond, VA",
	},
	{
		venue: "Beachland (tavern)",
		link: "http://google.com",
		date: "August 16",
		address: "Address",
		cityState: "Richmond, VA",
	},
	{
		venue: "Reggies",
		link: "http://google.com",
		date: "August 17",
		address: "Address",
		cityState: "Chicago, IL",
	},
];

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
							{show.venue} (
							<a href={show.link} className="text-gray-400 underline">
								TICKETS
							</a>
							)
						</h3>
						<time
							dateTime={show.date}
							className="flex-none text-xs text-gray-500"
						>
							{show.date}
						</time>
					</div>
					<p className="mt-3 truncate text-sm text-gray-500">
						<span className="text-gray-400">{show.address}</span>{" "}
						{/* ( */}
						<span className="text-gray-400">
							{show.cityState}
						</span>{" "}
						{/* on <span className="text-gray-400">{show.branch}</span>) */}
					</p>
				</li>
			))}
		</ul>
	);
}
