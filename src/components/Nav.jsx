import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "src/context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
  const [mobileNav, setmobileNav] = useState(false);
  const { totalItem } = useCartContext();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <nav className="bg-gray-800">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setmobileNav(!mobileNav)}
              >
                <CgMenu size="1.6rem" name="menu-outline"></CgMenu>
              </button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                <img
                  className="block w-auto h-8 lg:hidden hover:filter hover:grayscale hover:brightness-200"
                  src="/images/logo.svg"
                  alt="E-Mart"
                ></img>{" "}
                <img
                  className="hidden w-auto h-8 lg:block hover:filter hover:grayscale hover:brightness-200"
                  src="/images/logo.svg"
                  alt="E-Mart"
                ></img>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/faq"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Faq{" "}
                  </NavLink>

                  <NavLink
                    to="/products"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Products
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <NavLink
                to="/cart"
                className="relative flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                <FiShoppingCart size="1.2rem" className="" />
                <span className="absolute top-0 right-0 w-4 h-4 p-0 m-0 font-mono text-sm leading-tight text-center text-white bg-red-600 rounded-full top right">
                  {totalItem}
                </span>
              </NavLink>

              <div className="relative ml-3 hidden sm:block">
                <div>
                  {isAuthenticated ? (
                    <button
                      className="px-3 py-1.5 bg-primary-green text-white rounded mx-2"
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  ) : (
                    <button
                      className="px-3 py-1.5 bg-primary-green text-white rounded mx-2"
                      onClick={() => loginWithRedirect()}
                    >
                      Log In
                    </button>
                  )}
                  ;
                </div>

                {/* <div
                  className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </NavLink>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </NavLink>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${mobileNav ? "block" : "hidden"}  sm:hidden"`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
              aria-current="page"
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Team
            </NavLink>

            <NavLink
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Projects
            </NavLink>

            <NavLink
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </NavLink>
            <div>
              {isAuthenticated ? (
                <button
                  className="px-3 py-1.5 bg-primary-green text-white rounded mx-2"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button
                  className="px-3 py-1.5 bg-primary-green text-white rounded mx-2"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              )}
              ;
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
