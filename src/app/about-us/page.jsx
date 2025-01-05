"use client";
import styles from "./aboutus.module.scss";

export default function AboutUs() {
	return (
		<section className={styles.aboutUs}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className="font-poppins font-light ">About Us</h2>
					<p className="font-poppins font-light ">
						At <strong>Wexen Interior</strong>, we believe in crafting
						beautiful, functional spaces that reflect your unique style and
						needs. Based in Gorakhpur, Our reach extends beyond Gorakhpur, with
						branches in <strong>Mumbai, Bengaluru,</strong> and
						<strong> Delhi</strong>.
					</p>
					<p className="font-poppins font-light ">
						Our team is dedicated to transforming your ideas into stunning
						realities. From interior design to execution, we bring creativity,
						precision, and professionalism to every project.
					</p>
					<div className={styles.contact}>
						<h3>Contact Information</h3>
						{/* <p>
							<strong>Uttar Pradesh Code:</strong> 09
						</p> */}
						<p>
							<strong>Gorakhpur Address:</strong>{" "}
							<a href="/">
								Chaska Husain, Husainabad in front of Khade Wali Masjid
								Gorakhnath, Gorakhpur
							</a>
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<a href="mailto:WEXENINTERIOR111@gmail.com">
								WEXENINTERIOR111@gmail.com
							</a>
						</p>
						<p>
							<strong>Mobile:</strong> +91 9373811418 / +91 9027614898 / +91
							8423952728
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
