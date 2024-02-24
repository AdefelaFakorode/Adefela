import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Fade from "react-reveal/Fade";

function Skills() {
  // Skills
  const frontEnd = [
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
      icon: <FaNodeJs size={50} />,
    },
    {
      title: "Express.JS",
      icon: <SiExpress size={50} />,
    },
    {
      title: "PostgreSQL",
      icon: <BiLogoPostgresql size={50} />,
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-secondary lg:min-h-screen mx-auto "
    >
      <Fade bottom distance="20%" duration={800}>
        {/* Title */}
        <div className="mt-[120px]">
          <h1 className="text-[60px] lg:text-[60px] 2xl:text-[80px] md:text-[50px] text-primaryTextColor font-bold">
            Tech Stack
          </h1>
        </div>

        {/* Boxes */}
        <div className="mt-9 space-y-5 lg:space-y-0 flex flex-col items-center lg:flex-row lg:space-x-10 mb-[50px] 2xl:mb-[80px] ">
          {/* Front-End Skills */}
          <div className="w-[350px] h-[450px] bg-primary flex flex-col items-center justify-evenly rounded-[20px] shadow-lg transition duration-300 transform hover:shadow-2xl">
            <h1 className="text-white text-4xl font-bold mb-5 ">Front-End</h1>
            <ul>
              {frontEnd.map((skill) => {
                return (
                  <li key={skill.title} className="flex items-center mb-3">
                    <div className="text-white translate-colors duration-300 hover:text-bHoverColor">
                      {skill.icon}
                    </div>
                    <span className="text-xl text-white ml-2">
                      {skill.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Back-End Skills */}
          <div className="w-[350px] h-[450px] bg-primary flex flex-col items-center justify-evenly rounded-[20px] shadow-lg transition duration-300 transform hover:shadow-2xl">
            <h1 className="text-white text-4xl font-bold mb-5">Back-End</h1>
            <ul>
              {backEnd.map((skill, index) => {
                return (
                  <li key={index} className="flex items-center mb-3">
                    <div className="text-white translate-colors duration-300 hover:text-bHoverColor">
                      {skill.icon}
                    </div>
                    <span className="text-xl text-white ml-2">
                      {skill.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Skills;
