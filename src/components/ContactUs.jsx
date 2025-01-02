"use client";
import React from "react";
import { motion } from "framer-motion";


function ContactUs() {
	return (
		<section className="px-4  container mx-auto py-16 ">
			<div className="max-w-3xl mx-auto text-center mb-8">
				<h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
				<p className="text-gray-600 mt-2">
					Have questions or need help? Fill out the form below, and we'll get
					back to you as soon as possible.
				</p>
			</div>

			<motion.form
				style={{
					backgroundImage: "url(/assets/cover-1.jpg)",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				className=" text-white  rounded-lg  w-full max-w-6xl mx-auto h-96"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div className="w-full h-full bg-slate-900 bg-opacity-25 p-12 flex flex-col justify-center items-center gap-8 ">
					<input
						type="text"
						name="email"
						id=""
						className="w-96 max-xl:w-80 p-1 rounded-md px-2 text-slate-900 font-poppins"
						placeholder="Enter your email address"
					/>
					<input
						type="text"
						name="name"
						id=""
						className="w-96 max-xl:w-80 p-1 rounded-md px-2 text-slate-900 font-poppins"
						placeholder="Enter your name"
					/>
					<textarea
						name="message"
						className="w-96 max-xl:w-80 p-2 rounded-md px-2 text-slate-900 font-poppins"
						placeholder="message"
						id=""
					></textarea>
					<button className="font-poppins font-semibold rounded-lg text-white hover:bg-transparent border-[2px] border-solid border-white transition-colors  uppercase bg-[#c6b069] p-4">
						Request quote now
					</button>
				</motion.div>
			</motion.form>
		</section>
	);
}

export default ContactUs;
