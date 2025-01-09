"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

function SimpleFooter() {
	return (
		<footer className="bg-gray-100 py-10 h-full max-md:py-8 max-md:h-fit flex justify-center items-center">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
				{/* About Us Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h4 className="text-xl font-bold text-gray-800 mb-4">About Us</h4>
					<p className="text-gray-600">
						At Wexen Interior, we believe that every space tells a story. Our
						mission is to craft luxurious, functional interiors that reflect
						your personality and style. From bespoke designs to flawless
						execution, we transform your spaces into timeless masterpieces.
					</p>
					<p className="text-sm text-gray-500 mt-4">
						Copyright ©2025 All rights reserved | Designed with by Wexen
						Interior
					</p>
				</motion.div>

				{/* Newsletter Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h4 className="text-xl font-bold text-gray-800 mb-4">Newsletter</h4>
					<p className="text-gray-600 mb-4">
						Stay inspired! Sign up for our newsletter to receive exclusive
						design tips, trends, and updates from Wexen Interior.
					</p>
					<form className="flex items-center">
						<input
							type="email"
							placeholder="Email Address"
							className="flex-1 py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-500"
						/>
						<motion.button
							type="submit"
							className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							→
						</motion.button>
					</form>
				</motion.div>

				{/* Follow Us Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<h4 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h4>
					<p className="text-gray-600 mb-4">
						Join our community for daily inspiration, behind-the-scenes looks,
						and design updates.
					</p>
					<div className="flex space-x-4">
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
				</motion.div>
			</div>
		</footer>
	);
}

export default SimpleFooter;
