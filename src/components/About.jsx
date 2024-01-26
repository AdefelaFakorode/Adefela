import BBP1 from "../assets/BBP1.jpg";
import BBP2 from "../assets/BBP2.jpg";

const About = () => {
  return (
    <div name="about" className=" min-w-full min-h-screen  bg-primary">
      <div className="xl:pt-[110px]  pt-[100px]">
        <div className="xl:flex md:flex xl:flex-row-reverse md:flex-row-reverse justify-center ">
          {/*About-text*/}
          <div className="xl:ml-[55px] xl:my-[90px] md:ml-[55px] md:my-[90px] xl:mr-[40px] ">
            <div className="flex justify-center  text-primaryTextColor font-bold text-[50px] mb-6">
              <h1>About Me</h1>
            </div>

            {/*Card*/}
            <div className="flex justify-center">
              <div className="w-[350px] h-[550px] xl:w-[640px] xl:h-[270px] md:w-[600px] md:h-[250px] rounded-[40px] xl:rounded-[40px] sm:w-[500px] bg-secondary flex items-center">
                <p className="my-8 mx-[14px] text-white xl:text-[17px] md:text-[17px] text-[20px] text-center">
                  Currently, I'm an undergraduate student-athlete at CUNY
                  College of Staten Island, majoring in Computer Science.
                  <br />
                  <br />
                  Deeply immersed in the world of Software Development, my
                  passion lies in the exciting realms of full-stack development,
                  intuitive UI/UX design, the marvels of artificial
                  intelligence, and fascinating human-computer interactions.
                  <br />
                  <br />
                  Outside of coding, I play basketball for the College of Staten
                  Island and binge-watch anime and manga.
                </p>
              </div>
            </div>
          </div>

          {/*Images*/}
          <div className="flex-auto center">
            <div className="flex justify-center pt-10 pb-10 space-x-6">
              <div>
                <img
                  src={BBP1}
                  alt="bbp1"
                  className="w-[170px] h-[250px] xl:w-[300px] xl:h-[450px] md:w-[250px] md:h-[370px]  rounded-[30px]"
                />
              </div>
              <div>
                <img
                  src={BBP2}
                  alt="bbp2"
                  className="w-[170px] h-[250px] xl:w-[300px] xl:h-[450px] rounded-[30px] md:w-[250px] md:h-[370px] mt-[110px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
