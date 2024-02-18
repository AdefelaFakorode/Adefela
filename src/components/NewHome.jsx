import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import PP3 from "../assets/PP3.jpg";

export default function NewHome() {
  return (
    <section className="min-h-screen bg-secondary" id="home">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="lg:flex-row-reverse flex flex-col justify-center items-center lg:text-left text-center pt-[160px]">
          {/*Image*/}
          <img
            src={PP3}
            alt="PP"
            className="rounded-full w-[370px] md:w-[470px] lg:w-[500px] 2xl:w-[700px] "
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
              <p className="text-[22px] md:text-[29px] lg:text-[20px] xl:text-[20px] 2xl:text-[25px] text-mainTextColor ">
                Hello, I’m Adefela Fakorode.
                <br /> A passionate Full-Stack Developer
                <br />
                based in New York.
              </p>
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
      </div>
    </section>
  );
}
