import React from "react";
import styles from "./contact-us.module.scss";

function Page() {
	return (
		<div className="h-auto py-32 px-8 flex flex-col items-center justify-center container mx-auto">
			<div className={`${styles.contact} w-full max-w-4xl`}>
				<h3 className="font-poppins text-4xl md:text-6xl font-light text-center mb-8 max-md:leading-[4rem]">
					Contact Information
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
					<div>
						<h4 className="font-semibold text-lg mb-2">Head Office:</h4>
						<p className="text-gray-700">
							Chaska Husain, Husainabad in front of Khade Wali Masjid,
							Gorakhnath, Gorakhpur
						</p>
					</div>
					<div>
						<h4 className="font-semibold text-lg mb-2">Mumbai Address:</h4>
						<p className="text-gray-700">
							601 Chandrakant Tower, Kumbhar Ali, Kalwa West, Thane 400601
						</p>
					</div>
					<div>
						<h4 className="font-semibold text-lg mb-2">Bengaluru Address:</h4>
						<p className="text-gray-700">
							24/1 Doddanekundi, Fern City Road, Outer Ring Rd, Marathahalli,
							Bangalore, Karnataka 560037
						</p>
					</div>
					<div>
						<h4 className="font-semibold text-lg mb-2">Delhi Address:</h4>
						<p className="text-gray-700">
							Gitorni Metro Stn, Givan Lal Farm, Club Drive Road
						</p>
					</div>
				</div>
				<div className="bg-gray-100 p-6 rounded-md shadow-md">
					<h4 className="font-semibold text-lg mb-4">Contact Details:</h4>
					<p className="mb-2">
						<strong>Email:</strong>{" "}
						<a
							href="mailto:WEXENINTERIOR111@gmail.com"
							className="text-blue-500 underline"
						>
							WEXENINTERIOR111@gmail.com
						</a>
					</p>
					<p className="mb-2">
						<strong>Mobile:</strong> +91 9373811418 / +91 9027614898 / +91
						8423952728
					</p>
				</div>
			</div>
		</div>
	);
}

export default Page;
