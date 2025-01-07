"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const projects = [
	{
		title: "Barista store",
		src: "/Barista_store/03.jpeg",
		color: "#000000",
		link: "/work/barista",
	},
	{
		title: "Hansik dabang cafe",
		src: "/hansik-dabang-cafe/02.jpeg",
		color: "#000000",
		link: "/work/hansik-dabang-cafe",
	},
	{
		title: "Tescom Wireless India",
		src: "/Tescom_wireless_india/01.jpg",
		color: "#000000",
		link: "/work/Tescom_wireless_india",
	},
	{
		title: "The Belgian Waffle Cafe",
		src: "/Tha_belgian_waffle_cafe/01.jpg",
		color: "#000000",
		link: "/work/The_belgian_waffle_cafe",
	},
	{
		title: "Bellavita Store",
		src: "/bellavita/01.jpeg",
		color: "#000000",
		link: "/work/bellavita-store",
	},
	{
		title: "Boba Tree Store",
		src: "/Boba-tree-store/01.jpeg",
		color: "#000000",
		link: "/work/boba-tree-store",
	},
];
const scaleAnimation = {
	initial: { scale: 0, x: "-50%", y: "-50%" },
	enter: {
		scale: 1,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
	},
	closed: {
		scale: 0,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
	},
};

export default function Home() {
	const [modal, setModal] = useState({ active: false, index: 0 });
	const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
	const { active, index } = modal;
	const modalContainer = useRef(null);
	const cursor = useRef(null);
	const cursorLabel = useRef(null);

	let xMoveContainer = useRef(null);
	let yMoveContainer = useRef(null);
	let xMoveCursor = useRef(null);
	let yMoveCursor = useRef(null);
	let xMoveCursorLabel = useRef(null);
	let yMoveCursorLabel = useRef(null);

	useEffect(() => {
		//Move Container
		xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
			duration: 0.8,
			ease: "power3",
		});
		yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
			duration: 0.8,
			ease: "power3",
		});
		//Move cursor
		xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
			duration: 0.5,
			ease: "power3",
		});
		yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
			duration: 0.5,
			ease: "power3",
		});
		//Move cursor label
		xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
			duration: 0.45,
			ease: "power3",
		});
		yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
			duration: 0.45,
			ease: "power3",
		});
	}, []);

	const moveItems = (x, y) => {
		xMoveContainer.current(x);
		yMoveContainer.current(y);
		xMoveCursor.current(x);
		yMoveCursor.current(y);
		xMoveCursorLabel.current(x);
		yMoveCursorLabel.current(y);
	};
	const manageModal = (active, index, x, y) => {
		moveItems(x, y);
		setModal({ active, index });
	};

	return (
		<main
			onMouseMove={(e) => {
				moveItems(e.clientX, e.clientY);
			}}
			className={styles.projects}
		>
			<div className={styles.body}>
				{projects.map((project, index) => {
					return (
						<div key={index}>
							<Link href={project.link}>
								<Project
									index={index}
									title={project.title}
									manageModal={manageModal}
									key={index}
								/>
								{isMobile && (
									<div className="rounded-lg py-4" key={`modal_${index}`}>
										<Image
											src={`/assets${project.src}`}
											height={600}
											width={600}
											alt="image"
											className="object-cover w-full  h-auto rounded-lg"
										/>
									</div>
								)}
							</Link>
						</div>
					);
				})}
			</div>

			<>
				{isMobile ? (
					<div></div>
				) : (
					<motion.div
						ref={modalContainer}
						variants={scaleAnimation}
						initial="initial"
						animate={active ? "enter" : "closed"}
						className={styles.modalContainer}
					>
						<div
							style={{ top: index * -100 + "%" }}
							className={styles.modalSlider}
						>
							{projects.map((project, index) => {
								const { src, color } = project;
								return (
									<div
										className={styles.modal}
										style={{ backgroundColor: color }}
										key={`modal_${index}`}
									>
										<Image
											src={`/assets${src}`}
											width={300}
											height={0}
											alt="image"
											className="object-cover"
										/>
									</div>
								);
							})}
						</div>
					</motion.div>
				)}

				<motion.div
					ref={cursor}
					className={styles.cursor}
					variants={scaleAnimation}
					initial="initial"
					animate={active ? "enter" : "closed"}
				></motion.div>
				<motion.div
					ref={cursorLabel}
					className={styles.cursorLabel}
					variants={scaleAnimation}
					initial="initial"
					animate={active ? "enter" : "closed"}
				>
					View
				</motion.div>
			</>
		</main>
	);
}
