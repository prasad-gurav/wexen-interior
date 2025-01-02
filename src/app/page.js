import Image from "next/image";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import WhatWeOffer from "@/components/WhatWeOffer";
import OurWork from "@/components/OurWork";
import Features from "@/components/Features";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <NavBar/>
      <Hero/>
      <WhatWeOffer/>
      <OurWork />
      <Features/>
      <ContactUs />
      <Footer/>
    </div>
  );
}
