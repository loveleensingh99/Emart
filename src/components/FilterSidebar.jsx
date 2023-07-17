import { Slider } from "@material-tailwind/react";
import React, { useState } from "react";
import { SelectColor } from "./SubComponents";
import { useFilterContext } from "src/context/filterContext";
import { FormatPrice } from "src/Helper/ForamtPrice";
import { BsFilterLeft } from "react-icons/bs";

export default function FilterSidebar() {
  const {
    filters: {
      searchValue,
      category,
      company,
      color,
      price,
      maxPrice,
      minPrice,
    },
    updateFilterValue,
    allProducts,
    handleClearFilter,
  } = useFilterContext();

  //To get the unique Data
  const getUniqueData = (data, title) => {
    let newValue = data.map((item) => {
      return item[title];
    });
    newValue = Array.from(new Set(newValue));
    newValue.unshift("All");

    return newValue;
  };

  //We need unique data for category,colors.
  const categoryData = getUniqueData(allProducts, "category");
  const companyData = getUniqueData(allProducts, "company");
  const colorsfetchedData = getUniqueData(allProducts, "colors");
  const colorsData = Array.from(new Set(colorsfetchedData.flat()));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="text-center md:hidden">
        <button
          className="flex items-center justify-center w-10 p-1 border rounded cursor-pointer border-primary h-9 bg-primary md:hidden ring-gray-600"
          type="button"
          onClick={toggleSidebar}
        >
          <BsFilterLeft className="" />
        </button>
      </div>

      {/* MOBILE SIDEBAR Working*/}

      {isSidebarOpen && (
        <div
          id="drawer-example"
          className={`fixed top-0 left-0 z-0 h-screen p-4 overflow-y-auto   bg-white w-80  ${
            isSidebarOpen ? "block" : "hidden"
          }  `}
          tabindex="-1"
          aria-labelledby="drawer-label"
        >
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 "
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Info
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center -600 "
            onClick={toggleSidebar}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className=" col-span-1 px-4 pb-6 overflow-hidden bg-white rounded shadow ">
            <div className="space-y-5 divide-y divide-gray-200">
              <div className="mt-4">
                <input
                  type="text"
                  name={"searchValue"}
                  className="block w-full p-2 mb-4 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search"
                  value={searchValue}
                  onChange={updateFilterValue}
                />
                <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categoryData.map((item) => (
                    <>
                      <button
                        name="category"
                        className={`block hover:text-primary-blue ${
                          category === item ? "text-primary-blue" : ""
                        }`}
                        value={item}
                        onClick={updateFilterValue}
                      >
                        {item.charAt(0).toUpperCase().concat(item.slice(1))}
                      </button>
                    </>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                  Company
                </h3>
                <div className="space-y-2">
                  <select
                    name="company"
                    id="company"
                    className="px-4 py-2 pr-1 text-base text-gray-600 border border-gray-300 rounded w-44 bg-gray-50 focus:ring-primary focus:border-primary-blue"
                    onChange={updateFilterValue}
                  >
                    {companyData.map((curEle) => (
                      <option
                        value={curEle}
                        selected={company === curEle ? true : false}
                      >
                        {curEle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                  Price
                </h3>

                <div className="mt-4 ">
                  <h3 className="mb-1 text-lg font-medium text-gray-600 ">
                    <FormatPrice price={price} />
                  </h3>
                  <input
                    id="medium-range"
                    type="range"
                    name="price"
                    step="1000"
                    value={price}
                    min={minPrice}
                    max={maxPrice}
                    className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    onChange={updateFilterValue}
                  />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
                  Color
                </h3>
                <div className="flex items-center gap-2">
                  {/* {colorsData.map((item) => (
                <>
                  <button
                    name="color"
                    className={`inline-flex items-center justify-center p-1 rounded-full  ${
                      color === item ? "border border-gray-300" : ""
                    }`}
                    value={item}
                    onClick={updateFilterValue}
                  >
                    <div
                      className={`w-6 h-6 rounded-full  `}
                      style={{ backgroundColor: item }}
                    ></div>
                  </button>
                </>
              ))} */}

                  {colorsData.map((item, index) => (
                    <>
                      {item === "All" ? (
                        <div
                          className={`inline-flex items-center justify-center p-1 rounded-full  ${
                            color === item ? "border border-gray-300" : ""
                          }`}
                          key={index}
                        >
                          <button
                            name="color"
                            value={item}
                            onClick={updateFilterValue}
                            // style={{ backgroundColor: item }}
                            className={`w-6 h-6 rounded-full border `}
                          >
                            All
                          </button>
                        </div>
                      ) : (
                        <div
                          className={`inline-flex items-center justify-center p-1 rounded-full  ${
                            color === item ? "border border-gray-300" : ""
                          }`}
                          key={index}
                        >
                          <button
                            name="color"
                            value={item}
                            onClick={updateFilterValue}
                            style={{ backgroundColor: item }}
                            className={`w-6 h-6 rounded-full border `}
                          ></button>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-sm"
                  onClick={handleClearFilter}
                >
                  CLEAR FILTERS{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Sidebar */}
      <div className="hidden col-span-1 px-4 pb-6 overflow-hidden bg-white rounded shadow md:block">
        <div className="space-y-5 divide-y divide-gray-200">
          <div className="mt-4">
            <input
              type="text"
              name={"searchValue"}
              className="block w-full p-2 mb-4 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search"
              value={searchValue}
              onChange={updateFilterValue}
            />
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Categories
            </h3>
            <div className="space-y-2">
              {categoryData.map((item) => (
                <>
                  <button
                    name="category"
                    className={`block hover:text-primary-blue ${
                      category === item ? "text-primary-blue" : ""
                    }`}
                    value={item}
                    onClick={updateFilterValue}
                  >
                    {item.charAt(0).toUpperCase().concat(item.slice(1))}
                  </button>
                </>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Company
            </h3>
            <div className="space-y-2">
              <select
                name="company"
                id="company"
                className="px-4 py-2 pr-1 text-base text-gray-600 border border-gray-300 rounded w-44 bg-gray-50 focus:ring-primary focus:border-primary-blue"
                onChange={updateFilterValue}
              >
                {companyData.map((curEle) => (
                  <option
                    value={curEle}
                    selected={company === curEle ? true : false}
                  >
                    {curEle}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Price
            </h3>

            <div className="mt-4 ">
              <h3 className="mb-1 text-lg font-medium text-gray-600 ">
                <FormatPrice price={price} />
              </h3>
              <input
                id="medium-range"
                type="range"
                name="price"
                step="1000"
                value={price}
                min={minPrice}
                max={maxPrice}
                className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                onChange={updateFilterValue}
              />
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Color
            </h3>
            <div className="flex items-center gap-2">
              {/* {colorsData.map((item) => (
                <>
                  <button
                    name="color"
                    className={`inline-flex items-center justify-center p-1 rounded-full  ${
                      color === item ? "border border-gray-300" : ""
                    }`}
                    value={item}
                    onClick={updateFilterValue}
                  >
                    <div
                      className={`w-6 h-6 rounded-full  `}
                      style={{ backgroundColor: item }}
                    ></div>
                  </button>
                </>
              ))} */}

              {colorsData.map((item, index) => (
                <>
                  {item === "All" ? (
                    <div
                      className={`inline-flex items-center justify-center p-1 rounded-full  ${
                        color === item ? "border border-gray-300" : ""
                      }`}
                      key={index}
                    >
                      <button
                        name="color"
                        value={item}
                        onClick={updateFilterValue}
                        // style={{ backgroundColor: item }}
                        className={`w-6 h-6 rounded-full border `}
                      >
                        All
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`inline-flex items-center justify-center p-1 rounded-full  ${
                        color === item ? "border border-gray-300" : ""
                      }`}
                      key={index}
                    >
                      <button
                        name="color"
                        value={item}
                        onClick={updateFilterValue}
                        style={{ backgroundColor: item }}
                        className={`w-6 h-6 rounded-full border `}
                      ></button>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-sm"
              onClick={handleClearFilter}
            >
              CLEAR FILTERS{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
