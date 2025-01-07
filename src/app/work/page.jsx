"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

import Projects from "@/components/Projects";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();

			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 2000);
		})();
	}, []);

	return (
		<main className={styles.main}>
			<Projects />
		</main>
	);
}
