'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 0.4; // 40% of the viewport height
      setScrolled(scrollPosition > triggerHeight);
    };

    // Check scroll position immediately on mount
    handleScroll();

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className="fixed w-full z-50 flex mx-auto p-4 justify-evenly transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "#0f172a" : "transparent",
        color: "#fff",
      }}
      animate={{
        backgroundColor: scrolled ? "#0f172a" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.5 }}
    >
      <div>WEXEN</div>
      <div>
        <ul className="flex items-center justify-center gap-8 px-8">
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
