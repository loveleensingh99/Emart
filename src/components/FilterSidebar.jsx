import { Slider } from "@material-tailwind/react";
import React from "react";
import { SelectColor } from "./SubComponents";
import { useFilterContext } from "src/context/filterContext";

export default function FilterSidebar() {
  const {
    filters: { searchValue, category, company },
    updateFilterValue,
    allProducts,
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
  const colors = ["#00FF00 ", "ffffff", "00FFFF "];
  return (
    <>
      <div className="text-center md:hidden">
        <button
          className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  -700 focus:outline-none -800 block md:hidden"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
        >
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      {/* MOBILE SIDEBAR currently not working */}
      {/* <div
        id="drawer-example"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 "
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
        <div className="space-y-5 divide-y divide-gray-200">
          <div>
            <input
              type="text"
              name={"searchValue"}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
              placeholder="Search"
              value={searchValue}
              onChange={updateFilterValue}
            />

            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Categories
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="cat-1"
                  id="cat-1"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="cat-1"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Bedroom
                </label>
                <div className="ml-auto text-sm text-gray-600">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="cat-2"
                  id="cat-2"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="cat-2"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Sofa
                </label>
                <div className="ml-auto text-sm text-gray-600">(9)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="cat-3"
                  id="cat-3"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="cat-3"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Office
                </label>
                <div className="ml-auto text-sm text-gray-600">(21)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="cat-4"
                  id="cat-4"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="cat-4"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Outdoor
                </label>
                <div className="ml-auto text-sm text-gray-600">(10)</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Brands
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-1"
                  id="brand-1"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="brand-1"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Cooking Color
                </label>
                <div className="ml-auto text-sm text-gray-600">(15)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-2"
                  id="brand-2"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="brand-2"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Magniflex
                </label>
                <div className="ml-auto text-sm text-gray-600">(9)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-3"
                  id="brand-3"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="brand-3"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Ashley
                </label>
                <div className="ml-auto text-sm text-gray-600">(21)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-4"
                  id="brand-4"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="brand-4"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  M&D
                </label>
                <div className="ml-auto text-sm text-gray-600">(10)</div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="brand-5"
                  id="brand-5"
                  className="rounded-sm cursor-pointer text-primary focus:ring-0"
                />
                <label
                  for="brand-5"
                  className="ml-3 text-gray-600 cusror-pointer"
                >
                  Olympic
                </label>
                <div className="ml-auto text-sm text-gray-600">(10)</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Price
            </h3>
            <div className="flex items-center mt-4">
              <input
                type="text"
                name="min"
                id="min"
                className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                placeholder="min"
              />
              <span className="mx-3 text-gray-500">-</span>
              <input
                type="text"
                name="max"
                id="max"
                className="w-full px-3 py-1 text-gray-600 border-gray-300 rounded shadow-sm focus:border-primary focus:ring-0"
                placeholder="max"
              />
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              size
            </h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  for="size-xs"
                  className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-sm"
                  className="hidden"
                />
                <label
                  for="size-sm"
                  className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-m"
                  className="hidden"
                />
                <label
                  for="size-m"
                  className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-l"
                  className="hidden"
                />
                <label
                  for="size-l"
                  className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xl"
                  className="hidden"
                />
                <label
                  for="size-xl"
                  className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                >
                  XL
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Color
            </h3>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input type="radio" name="color" id="red" className="hidden" />
                <label
                  for="red"
                  className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="black"
                  className="hidden"
                />
                <label
                  for="black"
                  className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="white"
                  className="hidden"
                />
                <label
                  for="white"
                  className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer"
                ></label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 -700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 -700 focus:outline-none -800"
          >
            Get access{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div> */}
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
                  <option value={curEle}>{curEle}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Price
            </h3>
            <div className="mt-4 ">
              <input
                id="medium-range"
                type="range"
                value="50"
                className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>
          </div>

          <div className="pt-4">
            <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">
              Color
            </h3>
            <div className="flex items-center gap-2">
              <SelectColor colors={colors} />
            </div>
          </div>
          <div className="pt-4">
            <button className="px-4 py-2 bg-gray-300 rounded-sm">
              CLEAR FILTERS{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
