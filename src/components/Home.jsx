import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import PP from "../assets/PP.jpg";

const Home = () => {
  return (
    <div name="home" className="min-w-full min-h-screen bg-secondary">
      {/* Container */}
      <div className="max-w-full px-11 flex flex-col justify-center h-full xl:pb-[60px]">
        {/* Flex Container for Text and Image */}
        <div className="flex flex-col sm:flex-row items-center mt-[130px]">
          {/* Image */}
          <img
            src={PP}
            alt="My Image"
            className="w-full sm:max-w-[1000px] sm:mt-20 mt-[100px] mb-10 sm:mb-0 rounded-full sm:mr-10 sm:order-1 lg:max-w-[500px] xl:max-w-[600px] sm:ml-auto "
          />
          {/* Text */}
          <div className="text-center sm:text-left sm:ml-auto sm:mt-20 ">
            <h1 className="md:text-7xl text-4xl xl:text-7xl sm:mb-2 text-primaryTextColor font-bold">
              Adefela Fakorode
            </h1>
            <h2 className="md:text-5xl   text-2xl xl:text-5xl sm:mb-2 text-primaryTextColor font-bold">
              Full-Stack Developer
            </h2>
            {/* Intro */}
            <p className="text-2xl xl:text-2xl text-mainTextColor sm:text-left">
              Hello, I’m Adefela Fakorode. A passionate <br /> Full-Stack
              Developer based in New York.
            </p>

            {/* LinkedIn & Github*/}
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
