import React from "react";

function Skills() {

// Skills
const frontEndS = [
  {
    title: "JavaScript",
    icon: "..."
  },
  {
    title: "React.JS",
    icon: "..."
  },
  {
    title: "TailwindCSS",
    icon: "..."
  },
];

const backEnd = [
  {
    title: "Node.JS",
    icon: "..."
  },
  {
    title: "Express.JS",
    icon: "..."
  },
  {
    title: "PostgreSQL",
    icon: "..."
  },
];


  return (
    
    <div
    
      name="skill"
      className="flex w-full flex-col items-center justify-center bg-secondary"
    >
      {/*Tech Stack*/}
      <div className="mt-10">
        <h1 className="text-5xl text-primaryTextColor font-bold">Tech Stack</h1>
      </div>

      {/*Boxes*/}
      <div className="mt-9 space-y-5">
        <div className="w-[350px] h-[450px] bg-primary"></div>
        <div className="w-[350px] h-[450px] bg-primary"></div>
        <div className="w-[350px] h-[450px] bg-primary"></div>
      </div>


    </div>
  );
}

export default Skills;
