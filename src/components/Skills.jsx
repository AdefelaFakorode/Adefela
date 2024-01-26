import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

function Skills() {
  // Skills
  const frontEndS = [
    {
      title: "JavaScript",
      icon: <IoLogoJavascript size={50} />,
    },
    {
      title: "React.js",
      icon: <FaReact size={50} />,
    },
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss size={50} />,
    },
  ];

  const backEnd = [
    {
      title: "Node.JS",
      icon: <i className="devicon-nodejs-plain colored text-3xl"></i>,
    },
    {
      title: "Express.JS",
      icon: <i className="devicon-express-original colored text-3xl"></i>,
    },
    {
      title: "PostgreSQL",
      icon: <i className="devicon-postgresql-plain colored text-3xl"></i>,
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
        {/*Front-End Skills*/}
        <div className="w-[350px] h-[450px] bg-primary flex flex-col justify-evenly">
          <h1 className="text-mainTextColor">Front-End</h1>
          <ul>
            {frontEndS.map((skill, index) => {
              return (
                <li key={index}>
                <div className="text-white translate-colors duration-300 hover:text-primaryTextColor">
                  {skill.icon}
                </div>
                <span className="text-xl text-white">{skill.title}</span>
              </li>
              );
            })}
          </ul>
        </div>

        {/*Back-End Skills*/}
        <div className="w-[350px] h-[450px] bg-primary"></div>
      </div>
    </div>
  );
}

export default Skills;
