import { Button } from "@material-tailwind/react";
import React from "react";
import { FeatureProducts } from "src/components/FeatureProduct";
import FilterSidebar from "src/components/FilterSidebar";
import Footer from "src/components/Footer";
import Product from "src/components/Product";
import ShopProducts from "src/components/ShopProducts";
import { useFilterContext } from "src/context/filterContext";

export default function Products() {
  return (
    <>
      <div className=" grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start px-5">
        <FilterSidebar />

        <ShopProducts />
      </div>
      <Footer />
    </>
  );
}
