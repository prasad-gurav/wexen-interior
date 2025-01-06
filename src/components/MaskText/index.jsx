"use client";
import styles from "./page.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
const phrases = [
	"Elevate your business environment",
	"with designs that enhance productivity,  ",
	"creativity and brand identity.",
];

export default function Home() {
	return (
		<div className={styles.container}>
			<MaskText />
		</div>
	);
}

export function MaskText({ Text, customStyle }) {
	const body = useRef(null);

	const isInView = useInView(body, { once: false, margin: "-10%" });

	const animation = {
		initial: { y: "100%" },

		enter: (i) => ({
			y: "0",
			transition: {
				duration: 0.75,
				ease: [0.33, 1, 0.68, 1],
				delay: 0.075 * i,
			},
		}),
	};
	const textArray = Text || phrases;

	return (
		<div ref={body} className={styles.body}>
			{textArray.map((phrase, index) => {
				return (
					<div key={index} className={styles.lineMask}>
						<motion.p
							custom={index}
							variants={animation}
							initial="initial"
							animate={isInView ? "enter" : ""}
							style={customStyle}
						>
							{phrase}
						</motion.p>
					</div>
				);
			})}
		</div>
	);
}
