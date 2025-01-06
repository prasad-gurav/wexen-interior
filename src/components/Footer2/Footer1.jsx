import React from "react";
import Content from "./Content";
import SimpleFooter from "../Footer";

export default function Footer() {
	return (
		<div
			className="relative h-[800px] max-md:h-fit "
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="relative h-[calc(100vh+800px)] max-md:h-fit -top-[100vh] max-md:top-0  ">
				<div className="h-[800px] sticky top-[calc(100vh-800px)] max-md:bottom-0 max-md:h-fit ">
					<SimpleFooter />
				</div>
			</div>
		</div>
	);
}
