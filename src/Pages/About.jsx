import React, { useContext, useReducer } from "react";
import HeroSection from "../components/HeroSection";
import { myDataContext } from "../context/productContext";

export default function About() {
  
 
  const { fname } = useContext(myDataContext);

  const data = {
    name: "E-Store",
  };

  return (
    <>
      <h1> This is my name: {fname} </h1>
      <HeroSection myData={data} />
    </>
  );
}
