'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const triggerHeight = window.innerHeight * 0.4; // 40% of the viewport height
			setScrolled(scrollPosition > triggerHeight);
		};

		// Check scroll position immediately on mount
		handleScroll();

		// Add event listener for scroll
		window.addEventListener("scroll", handleScroll);

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const isHomePage = pathname === "/";

	return (
		<motion.nav
			className="absolute w-full z-50 flex mx-auto p-4 justify-between items-center transition-colors duration-500 "
			style={{
				// backgroundColor: scrolled ? "#0f172a" : "transparent",
				color: "#fff",
			}}
			animate={{
				backgroundColor: scrolled ? "#0f172a" : "rgba(0, 0, 0, 0)",
			}}
			transition={{ duration: 0.5 }}
		>
			<div className="flex items-center justify-between container px-4 mx-auto ">
				<Link
					href={"/"}
					className={`text-2xl ${
						isHomePage ? "text-white" : "text-black"
					} font-bold`}
				>
					WEXEN
				</Link>

				{/* Normal Desktop Menu */}
				<div>
					<ul className="flex items-center justify-center gap-8 px-8 max-md:hidden">
						{["Services", "About Us", "Contact Us"].map((item, index) => (
							<motion.li
								key={index}
								className="relative list-none"
								whileHover="hover"
							>
								<Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
									<motion.div
										className={`${
											isHomePage ? "text-white" : "text-black"
										}  cursor-pointer font-poppins font-light`}
										initial={{ opacity: 1 }}
										whileHover={{ opacity: 0.8 }}
										transition={{ duration: 0.3 }}
									>
										{item}
									</motion.div>
								</Link>
								<motion.div
									className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500"
									initial={{ scaleX: 0 }}
									animate="hover"
									whileHover={{ scaleX: 1 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									style={{ originX: 0 }}
								/>
							</motion.li>
						))}
					</ul>
				</div>

				{/* Mobile Menu Button */}
			</div>
		</motion.nav>
	);
};

export default NavBar;
