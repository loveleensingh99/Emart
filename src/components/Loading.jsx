import React from "react";

export default function Loading(isLoading = "") {
  return (
    <>
      <div className="bg-white h-screen w-full flex items-center justify-center">
        <img src="/Loading.gif" alt="Loading" className="w-20" />
      </div>
    </>
  );
}
