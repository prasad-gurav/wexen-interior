import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";
import { FaInstagram } from "react-icons/fa";

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Work",
		href: "/work",
	},
	{
		title: "About",
		href: "/about-us",
	},
	{
		title: "Contact",
		href: "/contact-us",
	},
];

export default function index() {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);
	const menuSlide = {
		initial: { x: "calc(100% + 100px)" },
		enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
		exit: {
			x: "calc(100% + 100px)",
			transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
	};
	const scale = {
		open: { scale: 1, transition: { duration: 0.3 } },

		closed: { scale: 0, transition: { duration: 0.4 } },
	};

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className={styles.menu}
		>
			<div className={styles.body}>
				<div
					onMouseLeave={() => {
						setSelectedIndicator(pathname);
					}}
					className={styles.nav}
				>
					{navItems.map((data, index) => {
						return (
							<Link
								key={index}
								data={{ ...data, index }}
								isActive={selectedIndicator == data.href}
								setSelectedIndicator={setSelectedIndicator}
							></Link>
						);
					})}
				</div>
				{/* <Footer /> */}
				<motion.a
					target="__blank"
					href={"https://www.instagram.com/wexeninterior/"}
					className="text-gray-400 hover:text-pink-500 text-2xl px-4"
					whileHover={{ scale: 1.2 }}
				>
					<FaInstagram size={48} />
					wexeninterior
				</motion.a>
			</div>
			<Curve />
		</motion.div>
	);
}
