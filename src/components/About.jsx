import React from "react";
import BBP1 from "../assets/BBP1.jpg";
import BBP2 from "../assets/BBP2.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-primary">
      <div className="my-36">
        {/*About-text*/}
        <div className="flex justify-center text-primaryTextColor font-bold text-5xl mb-6">
          <h1>About Me</h1>
        </div>
        {/*Card*/}
        <div className="flex justify-center">
          <div className="w-96 h-60 rounded-3xl bg-secondary flex items-center">
            <p className="my-8 text-white  text-center">
              Currently, I'm an undergraduate student-athlete at the College of
              Staten Island, majoring in Computer Science. Deeply immersed in
              the world of Software Development, my passion lies in the exciting
              realms of full-stack development, intuitive UI/UX design, the
              marvels of artificial intelligence, and fascinating human-computer
              interactions.
            </p>
          </div>
        </div>
        {/*Images*/}\
        <div className="flex justify-center mt-10 space-x-6">
          <div>
            <img src={BBP1} alt="bbp1" className="w-44 h-54 rounded-3xl" />
          </div>
          <div>
            <img
              src={BBP2}
              alt="bbp2"
              className="w-44 h-54 rounded-3xl mt-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
