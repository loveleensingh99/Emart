import React, { useContext, useReducer } from "react";
import HeroSection from "../components/HeroSection";
import { myDataContext } from "../context/productContext";
import Faq from "src/components/Faq";

export default function FAQ() {
  return (
    <>
      <div className=" px-4 md:px-20">
        <Faq />
      </div>
    </>
  );
}
