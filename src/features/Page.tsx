import React from "react";
import Visualizer from "./Visualizer";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex justify-center items-center border-b">
        <a href="/" className="text-2xl m-4">
          Packing Visualizer
        </a>
        <a
          href="https://github.com/is78-dev/packing-visualizer"
          target="_blank"
          className="absolute right-2"
        >
          <img src="/github-mark-white.png" alt="github" className="h-6" />
        </a>
      </div>
      <Visualizer />
    </div>
  );
};

export default Page;
