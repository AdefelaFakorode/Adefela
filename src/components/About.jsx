import BBP1 from "../assets/BBP1.jpg";
import BBP2 from "../assets/BBP2.jpg";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const navbarStyle = {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, .3)",
  };

  return (
    <section
      id="about"
      className="section xl:min-h-screen 2xl:xl:min-h-screen bg-primary"
    >
      <div className="container mx-auto">
        <Fade direction="up" delay={-600} duration={1500} triggerOnce>
          {/*Title*/}
          <div className="text-primaryTextColor flex justify-center items-center lg:my-auto md:text-[50px] text-[60px] lg:text-[60px] 2xl:text-[80px] font-bold mb-[20px] pt-[100px] xl:pt-[90px]">
            <h1>About</h1>
          </div>
          <div className="flex flex-col justify-center items-center xl:flex-row-reverse">
            {/*Card*/}
            <div
              className="
          w-[410px] h-[670px] bg-secondary rounded-[60px] xl:h-[350px] xl:w-[600px]
          text-white text-[24px] xl:text-[17px] 2xl:h-[450px] 2xl:w-[700px] 2xl:text-[22px]
          text-center 
          
          "
              style={navbarStyle}
            >
              {/*Text*/}
              <Fade direction="up" delay={-800} duration={1500} triggerOnce>
                <p className="m-[20px] lg:m-[20px] xl:m-[45px]">
                Currently, I'm an undergraduate student and former athlete at <br />{" "}
                  <a
                    href="https://www.csi.cuny.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-primaryTextColor translate-colors duration-300 hover:text-bHoverColor"
                  >
                    CUNY College of Staten Island
                  </a>
                  , majoring in Computer Science.
                  <br />
                  <br />
                  My passion lies in the exciting realms of UI/UX design and full-stack development. 
                  Where I can incorporate problem-solving, creativity, and design into an application itself.
                  <br />
                  <br />
                  Outside of coding, I enjoy streaming games on Twitch with friends, binge-watching anime, and reading manga.{" "}
                  <br />
                </p>
              </Fade>
            </div>
            {/*Images*/}
            <div className="flex-auto center xl:mr-[70px] 2xl:mr-[110px]  ">
              <div className="flex justify-center pt-10 lg:pt-[0px] xl:pt-[0px] pb-10 space-x-6 ">
                <div>
                  <img
                    src={BBP1}
                    alt="bbp1"
                    className="w-[170px] h-[250px] rounded-[30px] lg:w-[0px] lg:h-[0px] xl:w-[290px] xl:h-[440px]
                            md:w-[0px] md:h-[0px]    
                  "
                    style={navbarStyle}
                  />
                </div>
                <div>
                  <img
                    src={BBP2}
                    alt="bbp2"
                    className="w-[170px] h-[250px] rounded-[30px] mt-[110px] lg:w-[0px] lg:h-[0px] xl:w-[290px] xl:h-[440px]
                  md:w-[0px] md:h-[0px]  
                  "
                    style={navbarStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
