"use client"
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
		<div className="bg-slate-50 w-full h-[100vh]">
			<motion.div
				className="bg-[#050b1278] absolute w-full h-[100vh] flex justify-center items-center"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{
					opacity: 1,
					scale: 1,
					backgroundImage: "url(/hero-space.jpg)",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center center",
				}}
				transition={{ duration: 1 }}
			>
				<motion.h4
					className="text-6xl text-white font-titan w-[50%] text-wrap text-center leading-loose max-xl:text-4xl max-xl:w-full"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					Precise concept design for stylish living
				</motion.h4>
			</motion.div>
		</div>
	);
}

export default Hero;
