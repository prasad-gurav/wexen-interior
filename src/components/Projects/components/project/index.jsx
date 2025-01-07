"use client";
import React from "react";
import styles from "./style.module.scss";

export default function index({ index, title, manageModal }) {
	return (
		<div
			onMouseEnter={(e) => {
				manageModal(true, index, e.clientX, e.clientY);
			}}
			onMouseLeave={(e) => {
				manageModal(false, index, e.clientX, e.clientY);
			}}
			className={styles.project}
		>
			<h2 className="max-md:text-6xl max-md:py-4 mt-2">{title}</h2>
		</div>
	);
}
