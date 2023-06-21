import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormatPrice } from "src/Helper/ForamtPrice";
import Loading from "src/components/Loading";

import PageNavigation from "src/components/PageNavigation";
import ProductImages from "src/components/ProductImages";
import QuantityButton from "src/components/QuantityButton";
import { SelectColor, SelectColorS, Star } from "src/components/SubComponents";
import { useProductContext } from "src/context/productContext";

const API = "https://api.pujakaitem.com/api/products";

export default function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    featured,
    stock,
    stars,
    image,
    reviews,
    colors = [],
  } = singleProduct;

  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(0);

  const handleStateColor = (color) => setColor(color);

  const handleStateQuantity = (quant) => setQuantity(quant);

  console.log("stocle singleProduct", stock);
  useEffect(() => {
    console.log("Quantity Select From Parent Component=", quantity);
  }, [quantity]);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="mx-auto w-ful">Loading...</div>;
  }
  return (
    <>
      <div className="px-2 xl:px-8 md:px-4">
        <PageNavigation title={name} />

        <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4"></div>
              <ProductImages images={image} />
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-md mb-4">
                  <span className="text-xs text-gray-400 tracking-wider">{id}</span>
                  <h2 className="mt-5 mb-3 text-lg md:text-2xl lg:text-3xl font-heading font-medium">
                    Apple iPhone 12 Pro (128GB) - Silver
                  </h2>
                  <p className="flex items-center mb-2">
                    <span className="mr-2 text-sm font-medium">MRP:</span>
                    <span className="text-2xl font-medium">
                      <del>
                        {" "}
                        <FormatPrice price={price + 250000} />{" "}
                      </del>
                    </span>
                  </p>
                  <p className="flex items-center mb-4">
                    <span className="mr-2 text-sm text-blue-500 font-medium">
                      Deal of the day:
                    </span>
                    <span className="text-2xl text-blue-500 font-medium">
                      <FormatPrice price={price} />{" "}
                    </span>
                  </p>
                </div>
                <div className="flex mb-4 items-center">
                  <div className="flex pr-2 space-x-1">
                    <Star stars={stars} reviews={reviews} />
                  </div>

                  <span className="text-md text-gray-400">{` Customer Reviews (${reviews})`}</span>
                </div>
                <div className="mb-4">
                  {/* <SelectColorS price={price} colors={colors} /> */}

                  <SelectColor
                    colors={colors}
                    onColorUpdate={handleStateColor}
                  />
                </div>

                <div className="">
                  <QuantityButton
                    updateQuantity={handleStateQuantity}
                    stock={stock}
                  />
                </div>

                <div className="mb-2 space-y-1">
                  <h4 className="  font-heading font-medium">
                    <span className="text-gray-400">Available:</span>
                    <span>{stock > 0 ? " In Stock" : " Not Available"}</span>
                  </h4>

                  <h4 className=" font-heading font-medium">
                    <span className="text-gray-400">Brand:</span>
                    <span className=""> {company}</span>
                  </h4>
                </div>
                <div className="flex flex-wrap -mx-2 mb-12">
                  <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                    <a
                      className="block py-1 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                      href="#"
                    >
                      Add to bag
                    </a>
                  </div>
                  <div className="w-full md:w-1/3 px-2">
                    <a
                      className="flex w-full py-1 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                      href="#"
                    >
                      <span className="mr-2">Wishlist</span>
                      <svg
                        width="23"
                        height="22"
                        viewbox="0 0 23 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <p className="text-lg  mt-2">
                    <span className="text-gray-400">Description: </span>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
