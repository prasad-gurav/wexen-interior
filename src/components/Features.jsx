"use client";
import React from "react";
import { FaUserTie } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdSupportAgent } from "react-icons/md";
import { IoLogoDesignernews } from "react-icons/io5";
import { RxSpaceBetweenVertically } from "react-icons/rx";
import { BiSolidUserDetail } from "react-icons/bi";

import { motion } from "framer-motion";

const features = [
  {
    title: "Expert Technicians",
    description:
      "Computer users and programmers have become so accustomed to using Windows, even for the changing.",
    icon: <FaUserTie size={40} />,
  },
  {
    title: "Professional Service",
    description:
      "Computer users and programmers have become so accustomed to using Windows, even for the changing.",
    icon: <ImProfile size={40} />,
  },
  {
    title: "Great Support",
    description:
      "Computer users and programmers have become so accustomed to using Windows, even for the changing.",
    icon: <MdSupportAgent size={40} />,
  },
  {
    title: "Innovative Designs",
    description:
      "We combine aesthetics with functionality to deliver unique, cutting-edge designs that bring your vision to life.",
    icon: <IoLogoDesignernews size={40} />,
  },
  {
    title: "Attention to Detail",
    description:
      "Our meticulous attention to detail ensures flawless execution and a space that feels complete and cohesive.",
    icon: <BiSolidUserDetail size={40} />,
  },
  {
    title: "Space Optimization",
    description:
      "We maximize the potential of every space, ensuring functionality and beauty in even the smallest areas.",
    icon: <RxSpaceBetweenVertically size={40} />,
  },
];

function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
		<section className="bg-[#c6b069] py-16  flex items-center justify-center flex-col gap-y-16">
			<motion.div
				className="text-center mb-8"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeIn", delay: 0.4 }}
			>
				<h4 className="text-6xl font-poppins text-white font-bold">
					Some Features that Made us Unique
				</h4>
			</motion.div>
			<motion.div
				className="flex flex-wrap justify-center gap-6 px-4 w-[70%] mx-auto"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{features.map((item, idx) => (
					<motion.div
						key={idx}
						className="bg-white p-8 rounded-lg shadow-lg w-96 text-center"
						variants={itemVariants}
						whileHover={{
							scale: 1.05,
							boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
						}}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<div className="flex items-center justify-evenly">
							<div className="text-[#c6b069] mb-4">{item.icon}</div>
							<h5 className="text-xl font-semibold mb-2">{item.title}</h5>
						</div>
						<p className="text-gray-600">{item.description}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}

export default Features;
