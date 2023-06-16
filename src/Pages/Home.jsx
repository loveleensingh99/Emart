import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import { FeatureProducts } from "src/components/FeatureProduct";
// import { Demo } from "~/reducer";

export default function Home() {
  const data = {
    name: "E-Store",
  };
  return (
    <>
      <div className="p-4 px-8 md:px-20">
        <HeroSection myData={data} />
        <div className="space-y-12">
          <FeatureProducts />
          <Services />
          <Trusted />
        </div>
      </div>
      <Footer />
    </>
  );
}
