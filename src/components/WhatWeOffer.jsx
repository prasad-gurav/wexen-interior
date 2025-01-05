"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import { color, motion } from "framer-motion";



const WhatWeOffer = () => {
	const [hovering, setHovering] = useState(null);

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
		hover: { boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", color: "#c6b069" },
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				when: "beforeChildren",
			},
		},
	};

	return (
		<div className=" max-xl:w-full flex justify-center items-center flex-col px-4 gap-12 mx-auto container min-h-[100vh]">
			<div className="flex flex-col gap-y-4 my-8">
				<div className="w-full  max-xl:pt-4 z-10 bg-white">
					<motion.h4
						className=" font-poppins font-semibold text-6xl text-black font- mb-12 max-xl:mb-0 text-center flex flex-col max-xl:text-4xl"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						What We Offer to Our Clients
						<motion.span className="text-lg py-4 text-gray-400  font-poppins font-light ">
							Who are in extremely love with eco friendly system.
						</motion.span>
					</motion.h4>
				</div>
				<motion.div
					className="flex flex-wrap items-center justify-center gap-4"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.3 }}
				>
					{[
						{
							title: "Interior Design",
							description:
								"Sony laptops are among the most well-known laptops on today’s market. Sony is a name that over time has established itself as creating a solid product.",
						},
						{
							title: "Architecture Design",
							description:
								"Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.",
						},
						{
							title: "Concept Design",
							description:
								"Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.",
						},
					].map((card, index) => (
						<motion.div
							key={index}
							className="w-[28rem] max-xl:max-w-80 relative aspect-video px-32 py-32 cursor-pointer mx-auto border-2 rounded-lg text-center  border-solid   bg-white hover:bg-gray-50 shadow-md overflow-hidden"
							variants={cardVariants}
							style={{
								backgroundImage: `url(/assets/cover-${index + 1}.jpg)`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
							onMouseEnter={() => {
								setHovering(index);
							}}
							onMouseLeave={() => {
								setHovering(null);
							}}
						>
							<motion.div
								className="text-white  w-full h-full absolute left-0  flex justify-center items-center flex-col "
								layout
								style={{
									bottom: hovering === index ? "0px" : "-100px",
									backgroundColor: hovering === index ? "#07091078" : "",
									color: "#fff",
								}}
								transition={{ duration: 0.6, ease: "easeInOut" }}
							>
								<motion.h5 className="text-2xl mb-4 capitalize font-poppins  font-light bg-white w-full text-black">
									{card.title}
								</motion.h5>
								<motion.p
									layout
									className="relative px-6"
									style={{
										width: "100%",
										opacity: hovering === index ? 1 : 0,
									}}
									transition={{ duration: 1, ease: "easeInOut" }}
								>
									{card.description}
								</motion.p>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default WhatWeOffer;
