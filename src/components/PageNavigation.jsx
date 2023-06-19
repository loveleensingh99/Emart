import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNavigation({ title }) {
  return (
    <>
      <div className="flex flex-row px-3 py-4">
        <NavLink to="/" className={"text-primary-blue"}>
          Home{" "}
        </NavLink>
        <p className={"pl-2"}>/ {title}</p>
      </div>
    </>
  );
}
