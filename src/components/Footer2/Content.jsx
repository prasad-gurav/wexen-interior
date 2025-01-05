import Link from "next/link";
import React from "react";

export default function Content() {
	return (
		<div className="bg-slate-900 py-8 px-12 h-full w-full flex flex-col justify-between">
			<Section1 />
			<Section2 />
		</div>
	);
}

const Section1 = () => {
	return (
		<div>
			<Nav />
		</div>
	);
};

const Section2 = () => {
	return (
		<div className="flex justify-between items-end">
			<h1 className="text-[7vw] text-white font-poppins  leading-[0.8] mt-10">
				Wexen Interior
			</h1>
			<p className="text-gray-200">©copyright</p>
		</div>
	);
};

const Nav = () => {
	return (
		<div className="flex shrink-0 gap-20">
			<div className="flex flex-col gap-2">
				<h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
				<Link className="text-[#fff]">Home</Link>
				<Link className="text-[#fff]">Projects</Link>
				<Link className="text-[#fff]">Our Mission</Link>
				<Link className="text-[#fff]">Contact Us</Link>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
				<Link className="text-[#fff]">News</Link>
				<Link className="text-[#fff]">Learn</Link>
				<Link className="text-[#fff]">Certification</Link>
				<Link className="text-[#fff]">Publications</Link>
			</div>
		</div>
	);
};
