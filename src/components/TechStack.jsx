import React from "react";

function TechStack() {
  return (
    <div
      name="techstack"
      className="flex items-center justify-center w-full h-screen bg-secondary flex-col"
    >
      {/*Title*/}
      <div className="flex justify-center text-primaryTextColor font-bold mb-4 text-6xl">
        <p>Tech Stack</p>
      </div>

      {/*Boxes*/}
      <div className="flex justify-center">
        <div className="flex items-center space-x-10">
          <div className="w-[300px] h-[500px] bg-slate-500 rounded-[30px]"></div>

          <div className="w-[300px] h-[500px] bg-slate-500 rounded-[30px]"></div>

          <div className="w-[300px] h-[500px] bg-slate-500 rounded-[30px]"></div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
