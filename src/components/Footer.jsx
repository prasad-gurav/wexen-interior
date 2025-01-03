"use client"
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-xl font-bold text-gray-800 mb-4">About Us</h4>
          <p className="text-gray-600">
            At Wexen Interior, we believe that every space tells a story. Our mission is to craft luxurious, functional interiors that reflect your personality and style. From bespoke designs to flawless execution, we transform your spaces into timeless masterpieces.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Copyright ©2025 All rights reserved | Designed with by Wexen Interior
          </p>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-bold text-gray-800 mb-4">Newsletter</h4>
          <p className="text-gray-600 mb-4">
            Stay inspired! Sign up for our newsletter to receive exclusive design tips, trends, and updates from Wexen Interior.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
            <motion.button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </form>
        </motion.div>

        {/* Follow Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h4>
          <p className="text-gray-600 mb-4">Join our community for daily inspiration, behind-the-scenes looks, and design updates.</p>
          <div className="flex space-x-4">
            {[
              { platform: "facebook", url: "https://facebook.com" },
              { platform: "twitter", url: "https://twitter.com" },
              { platform: "instagram", url: "https://instagram.com" },
              { platform: "pinterest", url: "https://pinterest.com" }
            ].map((icon, idx) => (
              <motion.a
                key={idx}
                href={icon.url}
                className="text-gray-400 hover:text-yellow-500 text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <i className={`fab fa-${icon.platform}`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
