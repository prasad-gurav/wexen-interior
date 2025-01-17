"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";

export default function Home() {
  const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const containerRef = useRef(null);
	const gsapContext = useRef(null); // To manage GSAP context for cleanup
	let animationFrameId = useRef(null); // To track requestAnimationFrame

	useLayoutEffect(() => {
		// Initialize Locomotive Scroll
		const scroll = new LocomotiveScroll({
			el: containerRef.current,
			smooth: true,
			multiplier: 1, // Adjust scroll speed
		});

		// Clean up Locomotive Scroll on unmount
		return () => {
			scroll.destroy();
		};
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Create a GSAP context to scope animations
		gsapContext.current = gsap.context(() => {
			if (slider.current) {
				gsap.to(slider.current, {
					scrollTrigger: {
						trigger: document.documentElement,
						scrub: 0.25,
						start: 0,
						end: window.innerHeight,
					},
					x: "-500px",
				});
			}

			let xPercent = 0;
			let direction = -1;

			const animate = () => {
				if (xPercent < -100) {
					xPercent = 0;
				} else if (xPercent > 0) {
					xPercent = -100;
				}
				if (firstText.current && secondText.current) {
					gsap.set(firstText.current, { xPercent: xPercent });
					gsap.set(secondText.current, { xPercent: xPercent });
				}
				xPercent += 0.1 * direction;
				animationFrameId.current = requestAnimationFrame(animate);
			};

			// Start the animation loop
			animationFrameId.current = requestAnimationFrame(animate);
		}, containerRef);

		// Cleanup GSAP animations, ScrollTrigger, and animation frame
		return () => {
			gsapContext.current.revert();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
			}
		};
	}, []);

  return (
		<motion.main
			ref={containerRef}
			data-scroll-container
			variants={slideUp}
			initial="initial"
			animate="enter"
			className={styles.landing}
		>
			<Image
				src="/hero-space.jpg"
				alt="background"
				fill={true}
				blurDataURL="auto"
				placeholder="blur"
				sizes="(max-width: 1948px) 100vw, (min-width: 769px) 100vw"
				priority // Ensures the image is loaded as soon as possible
			/>
			<div className={styles.sliderContainer}>
				<div ref={slider} className={styles.slider}>
					<p ref={firstText}>Precise concept design for stylish living -</p>
					<p ref={secondText}>Precise concept design for stylish living -</p>
				</div>
			</div>
			<div data-scroll data-scroll-speed={0.1} className={styles.description}>
				<svg
					width="9"
					height="9"
					viewBox="0 0 9 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
						fill="white"
					/>
				</svg>
				<p className="font-poppins font-semibold max-sm:text-sm">
					Crafting Your
				</p>
				<p className="font-poppins max-sm:text-sm">Unique Interior Design</p>
			</div>
		</motion.main>
	);
}
