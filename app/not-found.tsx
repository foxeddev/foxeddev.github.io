"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { FaRegFrown } from "react-icons/fa";

export default function Error() {
  return (
    <>
      <Header>
        <FaRegFrown className="bg-gray-800 -mt-36 p-8 rounded-full size-64 text-white" />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-mono text-gray-500 text-4xl">Error</p>
          <h1 className="font-extrabold text-gray-800 text-8xl sm:text-9xl">
            404
          </h1>
          <p className="font-mono text-gray-500 text-xl">
            This page could not be found.
          </p>
        </div>
      </Header>
      <Footer />
    </>
  );
}
