import { MaskText } from "@/components/MaskText";
import React from "react";

const ourWorks = [
	{
		slug: "barista",
		name: "Barista Store",
		img: [
			"/assets/Barista_store/barista.jpg",
			"/assets/Barista_store/03.jpeg",
			"/assets/Barista_store/04.jpeg",
			"/assets/Barista_store/05.jpeg",
		],
	},
	{
		slug: "Tescom_wireless_india",
		name: "Tescom Wireless India",
		img: [
			"/assets/Tescom_wireless_india/01.jpg",
			"/assets/Tescom_wireless_india/02.jpg",
			"/assets/Tescom_wireless_india/03.jpg",
			"/assets/Tescom_wireless_india/04.jpeg",
			"/assets/Tescom_wireless_india/05.jpeg",
			"/assets/Tescom_wireless_india/06.jpeg",
			"/assets/Tescom_wireless_india/07.jpeg",
		],
	},
	{
		slug: "The_belgian_waffle_cafe",
		name: "The Belgian Waffle Cafe",
		img: [
			"/assets/Tha_belgian_waffle_cafe/01.jpg",
			"/assets/Tha_belgian_waffle_cafe/02.jpg",
			"/assets/Tha_belgian_waffle_cafe/03.jpeg",
			"/assets/Tha_belgian_waffle_cafe/04.jpeg",
			"/assets/Tha_belgian_waffle_cafe/05.jpeg",
			"/assets/Tha_belgian_waffle_cafe/06.jpeg",
		],
	},
	{
		slug: "hansik-dabang-cafe",
		name: "Hansik dabang cafe",
		img: [
			"/assets/hansik-dabang-cafe/01.jpeg",
			"/assets/hansik-dabang-cafe/13.mp4",
			"/assets/hansik-dabang-cafe/17.jpeg",
			"/assets/hansik-dabang-cafe/16.jpeg",
			"/assets/hansik-dabang-cafe/02.jpeg",
			"/assets/hansik-dabang-cafe/03.jpeg",
			"/assets/hansik-dabang-cafe/04.jpeg",
			"/assets/hansik-dabang-cafe/05.jpeg",
			"/assets/hansik-dabang-cafe/06.jpeg",
			"/assets/hansik-dabang-cafe/07.jpeg",
			"/assets/hansik-dabang-cafe/08.jpeg",
			"/assets/hansik-dabang-cafe/09.jpeg",
			"/assets/hansik-dabang-cafe/10.jpeg",
			"/assets/hansik-dabang-cafe/11.jpeg",
			"/assets/hansik-dabang-cafe/12.jpeg",
		],
	},
	{
		slug: "boba-tree-store",
		name: "Boba Tree Store",
		img: [
			"/assets/Boba-tree-store/01.jpeg",
			"/assets/Boba-tree-store/02.jpeg",
			"/assets/Boba-tree-store/03.jpeg",
		],
	},
	{
		slug: "bellavita-store",
		name: "Bellavita Store",
		img: [
			"/assets/bellavita/01.jpeg",
			"/assets/bellavita/02.jpeg",
			"/assets/bellavita/03.jpeg",
		],
	},
];

async function Page({ params }) {
	const { slug } = await params;

	const work = ourWorks.find((work) => work.slug === slug);

	return (
		<div className="h-full py-32 px-16">
			<h3 className="text-center text-7xl text-black font-poppins font-light">
				{work?.name || "Work Not Found"}
			</h3>
			{work ? (
				<div>
					<h1 className="text-white text-2xl mb-4">{slug}</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
						{work.img.map((src, index) =>
							src.endsWith(".mp4") ? (
								<video
									key={index}
									controls
									className="w-full h-96 object-cover rounded-md"
								>
									<source src={src} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							) : (
								<img
									key={index}
									src={src}
									alt={`${slug} image ${index + 1}`}
									className="w-full h-96 object-cover rounded-md"
								/>
							)
						)}
					</div>
				</div>
			) : (
				<p className="text-white text-xl">No work found for "{slug}"</p>
			)}
		</div>
	);
}

export default Page;
