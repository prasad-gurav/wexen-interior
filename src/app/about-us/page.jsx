"use client";
import { color, motion } from "framer-motion";
import styles from "./aboutus.module.scss";
import { MaskText } from "@/components/MaskText";
import { useMediaQuery } from "react-responsive";

const directors = [
	{
		name: "Mr.Shubham Kathoke",
		image: "/assets/ourTeam/ShubhamKathoke.jpeg", // Replace with actual image paths
	},

	{
		name: "Mr.Mohd Mohsin",
		image: "/assets/ourTeam/MohdMosin.jpeg", // Replace with actual image paths
	},

	{
		name: "Mr.Mohd Sharik",
		image: "/assets/ourTeam/MohdSharik.jpeg", // Replace with actual image paths
	},
];

export default function AboutUs() {
	const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
	return (
		<section className={styles.aboutUs}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className="font-poppins font-light !text-gray-700 !my-16 !text-7xl ">
						About Us
					</h2>
					<p className="font-poppins font-light">
						At <strong>Wexen Interior</strong>, we believe in crafting
						beautiful, functional spaces that reflect your unique style and
						needs. Based in Gorakhpur, our reach extends beyond Gorakhpur, with
						branches in <strong>Mumbai, Bengaluru,</strong> and{" "}
						<strong>Delhi</strong>.
					</p>
					<p className="font-poppins font-light">
						Our team is dedicated to transforming your ideas into stunning
						realities. From interior design to execution, we bring creativity,
						precision, and professionalism to every project.
					</p>
				</div>
			</div>

			<div id="our-team" className={styles.teamSection}>
				<h3 className="font-poppins  text-gray-700 !font-light text-center my-16 text-7xl">
					Meet Our Team
				</h3>
				<motion.div
					className={styles.directors}
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { staggerChildren: 0.3 },
						},
					}}
				>
					{directors.map((director, index) => (
						<motion.div
							key={index}
							className={styles.directorCard}
							variants={{
								hidden: { opacity: 0, y: 50 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className="relative">
								<div
									className={styles.directorImage}
									style={{
										backgroundImage: `url(${director.image})`,
										backgroundPosition: "center",
										backgroundSize: "cover",
										borderRadius: "50%",
									}}
								/>
								<p className="absolute left-[50%] translate-x-[-50%] text-xl max-xl:py-8 py-8">
									Managing Directors
								</p>
							</div>

							<div className=" w-full">
								{isMobile ? (
									<p className="font-poppins font-light text-[40px]">
										{director.name}
									</p>
								) : (
									<MaskText
										Text={director.name.split(" ")}
										customStyle={{
											fontSize: "120px",
											color: "#000",
											fontWeight: 300,
										}}
									/>
								)}
							</div>

							{/* <img src={director.image} alt={director.name} /> */}
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
