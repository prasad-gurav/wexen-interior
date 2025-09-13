"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function OurWork() {
	const containerVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const hoverVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: "easeOut" },
		},
	};

	const works = [
		{
			src: "/assets/Barista_store/barista.jpg",
			alt: "Barista Store",
			description:
				"A cozy barista store offering the finest coffee experience.",
			slug: "barista",
		},
		{
			src: "/assets/Tha_belgian_waffle_cafe/01.jpg",
			alt: "Belgian Waffle Cafe",
			description: "Delight in the finest Belgian waffles and warm ambiance.",
			slug: "The_belgian_waffle_cafe",
		},
		{
			src: "/assets/bellavita/01.jpeg",
			alt: "Bellavita Store",
			description:
				"Modern and elegant interior for a memorable dining experience.",
			slug: "bellavita-store",
		},
		{
			src: "/assets/Tescom_wireless_india/01.jpg",
			alt: "Tescom wireless india",
			description: "A fusion of Korean tradition and contemporary design.",
			slug: "Tescom_wireless_india",
		},
		{
			src: "/assets/hansik-dabang-cafe/02.jpeg",
			alt: "Hansik dabang cafe",
			description: "A fusion of Korean tradition and contemporary design.",
			slug: "hansik-dabang-cafe",
		},

		{
			alt: "Boba Tree Store",
			src: "/assets/Boba-tree-store/01.jpeg",
			slug: "boba-tree-store",
		},
		{
			alt: 'Sun Bright Residency',
			src: '/assets/sun_bright_residency/25.jpeg',
			slug: 'sun-bright-residency',
		},
		{
			alt: "Mod Store",
			src: "/assets/mod/13.jpeg",
			slug: "mod",
		},
		{
			alt: "Sun n Shade",
			src: "/assets/sun-and-shade/15.jpeg",
			slug: "sun-n-shade",
		},
		{
			alt: "Pratham Udupi Food Court",
			src: "/assets/pratham-foods/30.jpeg",
			slug: "pratham-udupi-food-court"
		}

	];

	return (
		<motion.div
			className="p-4 px-52 max-md:px-2 m-2 flex flex-col items-center justify-center gap-4 py-16 max-w-screen-2xl mx-auto "
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.1 }}
			variants={containerVariants}
		>
			<motion.h4
				className="text-black font-poppins font-semibold text-5xl  mb-12 text-center max-xl:text-4xl"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				Our Recent Works May Impress You
			</motion.h4>
			<motion.div
				className="flex w-[100%] py-8 mx-auto gap-10 justify-center flex-wrap "
				variants={containerVariants}
			>
				{works.map((work, index) => (
					<Link href={`/work/${work.slug}`} key={index}>
						<motion.div
							className="relative group cursor-pointer"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							variants={itemVariants}
						>
							<div
								className="vignette-effect rounded-md overflow-hidden max-h-[450px] max-w-[800px]"
								style={{
									boxShadow: "0 0 200px rgba(0,0,0,0.9) inset",
								}}
							>
								<Image
									className="w-auto h-96 object-cover"
									width={1000}
									height={1000}
									src={work.src}
									alt={work.alt}
								/>
							</div>
							<motion.div
								className="hidden max-xl:flex absolute inset-0 bg-black bg-opacity-50  items-center justify-center rounded-md"
								initial="visible"
								whileHover="visible"
								variants={hoverVariants}
							>
								<p className="text-white text-center font-poppins font-semibold text-4xl px-4">
									{work.alt}
								</p>
							</motion.div>
							<motion.div
								className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-md"
								initial="hidden"
								whileHover="visible"
								variants={hoverVariants}
							>
								<p className="text-white text-center font-poppins font-bold text-4xl px-4">
									{work.alt}
								</p>
							</motion.div>
						</motion.div>
					</Link>
				))}
			</motion.div>
		</motion.div>
	);
}

export default OurWork;
