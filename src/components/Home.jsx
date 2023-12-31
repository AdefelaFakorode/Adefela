import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import PP from "../assets/PP.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-secondary">
      {/* Container */}
      <div className="max-w-[1000px] px-10 flex flex-col justify-center h-full">
        {/* Flex Container for Text and Image */}
        <div className="flex flex-col sm:flex-row items-center">
          {/* Image */}
          <img
            src={PP}
            alt="My Image"
            className="sm:max-w-[300px] mb-10 rounded-full sm:mr-10 sm:order-1"
          />
          {/* Text */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl xl:text-7xl text-primaryTextColor font-bold">
              Adefela Fakorode
            </h1>
            <h2 className="text-2xl xl:text-5xl text-primaryTextColor font-bold">
              Full-Stack Developer
            </h2>
            {/* Intro */}
            <p className="text-2xl xl:text-4xl text-mainTextColor sm:text-left">
              Hello, I’m Adefela Fakorode.
              <br />
              A passionate Full-Stack Developer <br />
              based in New York.
            </p>
            {/* LinkedIN & Github */}
            <ul className="flex justify-center sm:justify-start mt-3">
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
                  className="mx-4 py-1 text-white translate-colors duration-300 hover:text-primaryTextColor"
                  href="https://github.com/AdefelaFakorode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={27} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
