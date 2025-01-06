import React from "react";
import styles from "./contact-us.module.scss";
function page() {
	return (
		<div className="h-[80vh] flex items-center justify-center container px-8">
			<div className={styles.contact}>
				<h3 className="font-poppins text-6xl font-light">
					Contact Information
				</h3>
				<div className="my-16">
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
	);
}

export default page;
