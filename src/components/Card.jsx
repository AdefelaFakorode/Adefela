import { Fade } from "react-awesome-reveal";

function Card({ title, description, link, demo, image }) {
  return (
    <div className="container mx-auto py-[50px]">
      <div className="flex flex-col items-center justify-center">
        {/* Cards */}
        <div className="bg-secondary w-[380px] h-[320px] rounded-[20px] lg:w-[1000px] lg:h-[400px] shadow-lg transition duration-300 transform hover:shadow-2xl filter hover:brightness-90">
          <div className="flex flex-col lg:flex-row text-white text-center">
            {/* Image */}
            <div className="lg:px-5 lg:py-[50px] ">
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="lg:w-[2000px] lg:h-[290px] w-[0px] h-[0px] mx-auto rounded-[15px]"
                />
              )}
            </div>

            <div className="flex flex-col justify-center lg:pr-4">
              {/* Title */}
              <div className="font-bold text-primaryTextColor text-[30px] lg:mt-[0px] mt-[30px]">
                <h1>{title}</h1>
              </div>

              {/* Description */}
              <div className="mt-[10px] text-[20px]">
                <p>{description}</p>
              </div>

              <div className="flex space-x-[15px] justify-center items-center mt-[20px]">
                <a
                  href={link}
                  className="bg-bColor hover:bg-bHoverColor translate-colors duration-300 text-white font-bold py-1 px-4 rounded hover:animate-bounce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
                {demo && (
                  <a
                    href={demo}
                    className="bg-bColor hover:bg-bHoverColor translate-colors duration-300 text-white font-bold py-1 px-4 rounded hover:animate-bounce"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
