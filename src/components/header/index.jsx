"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

export default function Home() {
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
	const { scrollY } = useScroll();
	const scaleValue = useSpring(scrollY, { stiffness: 400, damping: 40 });

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	const [scaleState, setScaleState] = useState("closed");

	useEffect(() => {
		console.log(isMobile);
		return scaleValue.onChange((latest) => {
			if (isMobile) {
				setScaleState("open");
			} else {
				if (latest > window.innerHeight * 0.6) {
					setScaleState("open");
				} else {
					setScaleState("closed");
				}
			}
		});
	}, [scaleValue]);

	const scale = {
		open: { scale: 1, transition: { duration: 0.3 } },
		closed: { scale: 0, transition: { duration: 0.4 } },
	};

	return (
		<>
			<div className={styles.main}>
				<div className={styles.header}>
					<motion.div
						initial="closed"
						animate={scaleState}
						variants={scale}
						onClick={() => {
							setIsActive(!isActive);
						}}
						className={styles.button}
					>
						<div
							className={`${styles.burger} ${
								isActive ? styles.burgerActive : ""
							}`}
						></div>
					</motion.div>
				</div>
			</div>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</>
	);
}
