import Image from "next/image";
import Hero from "@/components/Hero";

import WhatWeOffer from "@/components/WhatWeOffer";
import OurWork from "@/components/OurWork";
import Features from "@/components/Features";
import ContactUs from "@/components/ContactUs";

import Landing from "@/components/Landing";
import Hero2 from "@/components/Hero2";
export default function Home() {
	return (
		<div className="w-full h-full ">
			<Landing />
			<Hero2 />
			<WhatWeOffer />
			<OurWork />
			<Features />
			<ContactUs />
		</div>
	);
}
