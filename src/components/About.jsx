import React from "react";
import BBP1 from "../assets/BBP1.jpg";
import BBP2 from "../assets/BBP2.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="xl:flex xl:justify-end xl:flex-row-reverse w-full h-screen  bg-primary ">

      <div>
        {/*About text*/}
        <div className="flex justify-center text-primaryTextColor font-bold sm:text-xl xl:text-6xl mb-3 mt-14">
          <h1>About Me</h1>
        </div>

        {/*Card*/}
        <div className="flex justify-center ">
          <div className=" w-96 h-72 rounded-3xl  bg-secondary">
            <p className="m-8 text-white w-80">
              My name is Adefela Fakorode. Currently, I'm an undergraduate
              student-athlete at the College of Staten Island, majoring in
              Computer Science. Deeply immersed in the world of Software
              Development, my passion lies in the exciting realms of full-stack
              development, intuitive UI/UX design, the marvels of artificial
              intelligence, and fascinating human-computer interactions.
            </p>
          </div>
        </div>
      </div>

      {/*Images*/}
      <div className="xl:mx-24 xl:mt-28 mt-16 flex justify-center space-x-10">
        <div className="flex">
          <img src={BBP1} alt="bbp1" className="xl:w-64 xl:h-96 h-64 rounded-3xl" />
        </div>
        <div>
          <img src={BBP2} alt="bbp2" className="xl:w-64 xl:h-96 w-44 h-62 rounded-3xl xl:my-32 my-24" />
        </div>
      </div>
    </div>
  );
};

export default About;
