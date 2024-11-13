import React from "react";
import Visualizer from "./Visualizer";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex justify-center items-center border-b">
        <a href="/" className="text-2xl m-4">
          Packing Visualizer
        </a>
      </div>
      <Visualizer />
    </div>
  );
};

export default Page;
