import { CiLinkedin, FiGithub } from "react-icons/ci";
import pp from "../assets/pp.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-secondary">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <img src ={pp} alt ="adefela"></img>
        <h1 className="text-4xl sm:text-7xl text-primaryTextColor font-bold">Adefela Fakorode</h1>
        <h2 className="text-2xl sm:text-5xl  text-primaryTextColor font-bold">Full-Stack Developer</h2>
        <p className=" text-1xl sm:text-4xl text-white">
          Hello, I’m Adefela Fakorode.<br />
          A passionate Full-Stack Developer <br />
          based in New York.
        </p>
        <ul>
          <li className="flex">
            <a
              className=" text-white translate-colors duration-300 hover:text-primaryTextColor"
              href="https://www.linkedin.com/in/adefelafakorode/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin size={30}/>
            </a>
            <a
              className="px-4 py-1 text-white translate-colors duration-300 hover:text-primaryTextColor"
              href="https://github.com/AdefelaFakorode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={23} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
