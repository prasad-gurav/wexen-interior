"use client";
import React, { useLayoutEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import TextReveal from "@/components/MaskText";
import Image from "next/image";

function Hero2() {
	const containerRef = useRef(null);
	useLayoutEffect(() => {
		const scroll = new LocomotiveScroll({
			el: containerRef.current,
			smooth: true,
			multiplier: 1, // Adjust scroll speed
		});

		// Clean up on component unmount
		return () => {
			scroll.destroy();
		};
	}, []);
	return (
		<div
			className="relative flex max-md:flex-col w-full items-center justify-center gap-8  max-md:gap-0"
			ref={containerRef}
		>
			<TextReveal />
			<Image
				data-scroll
				data-scroll-speed={0.1}
				src="/assets/bg-cover-2.jpg"
				alt="wexen-interior"
				width={600}
				height={600}
				className="aspect-square w-[600px] h-auto object-contain rounded-lg"
			/>
		</div>
	);
}

export default Hero2;
