"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Statistics() {
	const stats = [
		{ value: "08", label: "Years of Experience" },
		{ value: "33+", label: "Projects Taken" },
		{ value: "150+", label: "Vendors & Contractors" },
		{ value: "3", label: "Ongoing Projects" },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
		},
	};

	return (
		<div className="bg-black text-white py-16  relative my-8">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center z-0"
				style={{
					backgroundImage: "url(/assets/bg-works.jpg)",
					filter: "brightness(0.6)",
					backgroundSize: "cover",
				}}
			></div>

			{/* Content Overlay */}
			<motion.div
				className="relative container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 z-10 items-center justify-center  h-full min-h-[70vh]"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{stats.map((stat, index) => (
					<motion.div
						key={index}
						className="text-center border border-gray-700 p-8 bg-gradient-to-b bg-white bg-opacity-50 text-slate-900 rounded-lg relative shadow-lg hover:scale-105 transition-transform duration-300"
						variants={cardVariants}
					>
						<motion.div
							className="text-6xl font-extrabold mb-4"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2 * index, duration: 0.5 }}
						>
							{stat.value}
						</motion.div>
						<motion.div
							className="text-lg uppercase font-semibold tracking-wider"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 * index + 0.2, duration: 0.7 }}
						>
							{stat.label}
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
