import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import PP3 from "../assets/PP3.jpg";
import Fade from "react-reveal/Fade";

export default function Home() {
  const navbarStyle = {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, .3)",
  };

  return (
    <section id="home" className="min-h-screen bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Fade bottom distance="20%" duration={1500}>
          <div className="lg:flex-row-reverse flex flex-col justify-center items-center lg:text-left text-center pt-[160px]">
            {/*Image*/}
            <img
              src={PP3}
              alt="PP"
              className="rounded-full w-[370px] md:w-[470px] lg:w-[500px] 2xl:w-[700px]"
              style={navbarStyle}
            />

            <div className="md:flex-col lg:mr-[100px]">
              {/*Text*/}
              <div className="space-y-[-10px] ">
                <h1 className="text-[40px] md:text-[50px] xl:text-[60px] lg:text-[50px] 2xl:text-[80px] text-primaryTextColor font-bold">
                  Adefela Fakorode
                </h1>
                <h2 className="text-[30px] md:text-[40px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-primaryTextColor font-bold">
                  Full-Stack Developer
                </h2>
              </div>
              {/*Intro*/}
              <div className="py-2">
                <Fade bottom distance="20%" duration={1000}>
                  <p className="text-[22px] md:text-[29px] lg:text-[20px] xl:text-[20px] 2xl:text-[25px] text-white">
                    Hello, I’m Adefela Fakorode.
                    <br /> A passionate Full-Stack Developer
                    <br />
                    based in New York.
                  </p>
                </Fade>
              </div>
              {/*LinkedIN & Github*/}
              <ul className="flex justify-center mt-3 lg:justify-start">
                <li className="flex">
                  <a
                    className="text-white translate-colors duration-300 hover:text-primaryTextColor"
                    href="https://www.linkedin.com/in/adefelafakorode/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin size={35} />
                  </a>

                  <a
                    className="mx-4 text-white translate-colors duration-300 hover:text-primaryTextColor"
                    href="https://github.com/AdefelaFakorode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={35} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
