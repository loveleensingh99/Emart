import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "src/context/productContext";

const API = "https://api.pujakaitem.com/api/products";

export default function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  console.log("Id:", id);
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
  } = singleProduct;
  console.log("singleProduct", singleProduct);
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return (
    <>
      {/* <PageNavigation></PageNavigation> */}

      <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4"></div>
            <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div class="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                <div class="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                  <a
                    class="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewbox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a class="h-30 block mb-4 mr-2 sm:mr-0" href="#">
                    <img
                      class="h-full w-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder1.png"
                      alt=""
                    />
                  </a>
                  <a class="hidden sm:block h-30 mb-4 mr-2 sm:mr-0" href="#">
                    <img
                      class="h-full w-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder2.png"
                      alt=""
                    />
                  </a>
                  <a
                    class="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 rounded-xl border-2 border-blueGray-500"
                    href="#"
                  >
                    <img
                      class="h-full w-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder4.png"
                      alt=""
                    />
                  </a>
                  <a class="h-30 block mb-4 sm:mb-12 mr-4 sm:mr-0" href="#">
                    <img
                      class="h-full w-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder3.png"
                      alt=""
                    />
                  </a>
                  <a
                    class="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewbox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="w-full sm:w-9/12 px-4">
                  <img
                    class="mb-5"
                    src="uinel-assets/images/ecommerce-product-info/ph-photo1.png"
                    alt=""
                  />
                  <p class="text-sm text-gray-300">
                    Roll over image to zoom in
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-md mb-4">
                <span class="text-xs text-gray-400 tracking-wider">
                  APPLE #3299803
                </span>
                <h2 class="mt-5 mb-3 text-lg md:text-2xl lg:text-3xl font-heading font-medium">
                  Apple iPhone 12 Pro (128GB) - Silver
                </h2>
                <p class="flex items-center mb-4">
                  <span class="mr-2 text-sm text-blue-500 font-medium">
                    MRP:
                  </span>
                  <span class="text-2xl text-blue-500 font-medium">4,490</span>
                </p>
              </div>
              <div class="flex mb-4 items-center">
                <div class="inline-flex mr-4">
                  <button class="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button class="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button class="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button class="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewbox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                </div>
                <span class="text-md text-gray-400">4.59</span>
              </div>
              <div class="mb-4">
                <h4 class="mb-3 font-heading font-medium">
                  <span>Color:</span>
                  <span class="text-gray-400">Silver</span>
                </h4>
                <button class="inline-flex items-center justify-center p-1 rounded-full border border-gray-300">
                  <div class="w-6 h-6 rounded-full bg-white"></div>
                </button>
                <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                  <div class="w-6 h-6 rounded-full bg-orange-800"></div>
                </button>
                <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                  <div class="w-6 h-6 rounded-full bg-blue-900"></div>
                </button>
                <button class="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                  <div class="w-6 h-6 rounded-full bg-yellow-500"></div>
                </button>
              </div>
              <div class="mb-8">
                <h4 class="mb-3 font-heading font-medium">Qty:</h4>
                <input
                  class="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  type="text"
                  placeholder="1"
                />
              </div>
              <div class="flex flex-wrap -mx-2 mb-12">
                <div class="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                  <a
                    class="block py-1 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                    href="#"
                  >
                    Add to bag
                  </a>
                </div>
                <div class="w-full md:w-1/3 px-2">
                  <a
                    class="flex w-full py-1 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                    href="#"
                  >
                    <span class="mr-2">Wishlist</span>
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
                <p class="text-lg text-gray-400 mt-2">
                  The nulla commodo, commodo eros a lor, tristique lectus. Lorem
                  sad 128 GB silver. Description...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}