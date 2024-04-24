import React from "react";
import Navbar from "./Navbar";

function Page({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <div className="px-20 py-12">{children}</div>
    </>
  );
}

export default Page;
