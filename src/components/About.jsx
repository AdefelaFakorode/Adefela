import BBP1 from "../assets/BBP1.jpg";
import BBP2 from "../assets/BBP2.jpg";

function NewAbout() {
  const navbarStyle = {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, .3)",
  };

  return (
    <section
      className="section xl:min-h-[48rem] 2xl:xl:min-h-[55rem] bg-primary"
      id="about"
    >
      <div className="container mx-auto">
        {/*Title*/}
        <div className="text-primaryTextColor flex justify-center items-center lg:my-auto text-[50px] 2xl:text-[80px] font-bold  mb-[20px] pt-[100px] xl:pt-[40px]">
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
            <p className="m-[20px] lg:m-[20px] xl:m-[45px]">
              Currently, I'm an undergraduate student-athlete at <br />{" "}
              <a
                href="https://www.csi.cuny.edu/"
                className="font-bold text-primaryTextColor"
              >
                CUNY College of Staten Island
              </a>
              , majoring in Computer Science.
              <br />
              <br />
              Deeply immersed in the world of Software Development, my passion
              lies in the exciting realms of full-stack development, intuitive
              UI/UX design, the marvels of artificial intelligence, and
              fascinating human-computer interactions.
              <br />
              <br />
              Outside of coding, I love to play video games with friends, <br />
              binge-watch anime and read manga.
            </p>
          </div>
          {/*Images*/}
          <div className="flex-auto center xl:mr-[70px] 2xl:mr-[110px]">
            <div className="flex justify-center pt-10 lg:pt-[0px] xl:pt-[0px] pb-10 space-x-6">
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
                  className="w-[170px] h-[250px] rounded-[30px] mt-[110px] lg:w-[0px] lg:h-[0px] xl:w-[290px] xl:h-[410px]
                  md:w-[0px] md:h-[0px]  
                  "
                  style={navbarStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewAbout;
