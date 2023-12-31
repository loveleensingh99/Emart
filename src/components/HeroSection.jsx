import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-32 lg:h-[85vh ]">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl place-items-center	 ">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-60 h-60 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-green-300 -bottom-4 right-20 w-60  h-60 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    className="object-cover object-center mx-auto "
                    alt="hero"
                    src="./images/hero.png "
                  ></img>
                </div>
              </div>
            </div>
            <div className="flex flex-col   mt-12 lg:mt-0 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 ">
              <h1 className="mb-8 text-4xl text-left font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                Shop Smart, Shop Conveniently{" "}
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                Get all your shopping needs fulfilled at your fingertips with
                E-Mart.
              </p>
              <div className="mr-auto">
                <NavLink to="products">
                  <Button className="bg-primary-blue">Shop Now</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
