import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Wexen Interior",
	description:
		"Explore modern, stylish, and innovative interior designs at Wexen Interior. Discover the perfect solutions for transforming your living or workspaces.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
