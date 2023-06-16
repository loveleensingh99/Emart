import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
// import { Demo } from "~/reducer";

export default function Home() {
  const data = {
    name: "E-Store",
  };
  return (
    <>
      <div className="md:px-20 px-8 p-4">
        <HeroSection myData={data} />
        <div className="space-y-12">
          <Services />
          <Trusted />
         
        </div>
      </div>
      <Footer />
    </>
  );
}
