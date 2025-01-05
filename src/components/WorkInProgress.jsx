"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

const WorkInProgress = () => {
	return (
		<div style={styles.container}>
			<h2 className="text-4xl font-poppins font-semibold ">Work in Progress</h2>

			<img
				src="/assets/working.png"
				className="w-[60vw] mx-auto h-auto"
				alt="workInProgress"
			/>
		</div>
	);
};

const styles = {
	container: {
		fontFamily: "Poppins, sans-serif",
		textAlign: "center",
		padding: "50px 20px",
		background: "#f0f0f0",
		borderRadius: "10px",
		boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
		display: "flex",
		flexDirection: "column",
		height: "80vh",
		justifyContent: "center",
		alignItems: "center",
		padding: "25px 0px",
	},
};

export default WorkInProgress;
