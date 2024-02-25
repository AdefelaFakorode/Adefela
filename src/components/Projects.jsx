import Card from "./Card";
import Aurora from "../assets/Aurora.png";
import NFT from "../assets/NFT.jpg";
import { Fade } from "react-awesome-reveal";

function Projects() {
  const listOfProject = [
    {
      title: "Aurora",
      description:
        "Cutting-edge quiz generation platform leveraging OpenAI’s API, aimed at providing a personalized and adaptive education based on user prompts.",
      link: "https://github.com/AdefelaFakorode/Aurora",
      image: Aurora,
      demo: "http://ec2-3-210-110-55.compute-1.amazonaws.com/",
      tech: null,
    },
    {
      title: "NFT-World",
      description:
        "E-Commerce platform specializing in the sale of NFT Collections, showcasing new and featured NFTs, while educating users about the concept and potential of NFTs.",
      link: "https://github.com/AdefelaFakorode/NFTsWorld-Website",
      image: NFT,
      demo: null,
      tech: null,
    },
  ];

  return (
    <section id="projects" className=" min-h-[910px] bg-primary">
      <Fade direction="up" delay={-600} duration={1500} triggerOnce>
        <div className="font-bold pt-[90px] text-[60px] text-primaryTextColor flex justify-center text-center">
          <h1>Projects</h1>
        </div>
        <div className="container mx-auto">
          {listOfProject.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              demo={project.demo}
            />
          ))}
        </div>
      </Fade>
    </section>
  );
}

export default Projects;
