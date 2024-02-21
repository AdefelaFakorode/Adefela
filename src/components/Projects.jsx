import Aurora from "../assets/projectPics/Aurora.png";
import Card from "./Card";

function Projects() {
  const listOfProject = [
    {
      title: "Aurora",
      description:
        "Cutting-edge quiz generation platform leveraging OpenAI’s API, aimed at providing a personalized and adaptive education based on user prompts.",
      link: "https://github.com/AdefelaFakorode/Aurora",
      image: Aurora,
      demo: "http://ec2-3-210-110-55.compute-1.amazonaws.com/",
      tech: [],
    },
    {
      title: "NFT-World",
      description:
        "E-Commerce platform specializing in the sale of NFT Collections, showcasing a display of new and featured NFTs",
      link: "https://github.com/AdefelaFakorode/NFTsWorld-Website",
      image: Aurora,
      demo: "...",
      tech: [],
    },
  ];

  return (
    <section id="projects" className=" min-h-[911px] bg-primary">
      <div className="font-bold pt-[100px] mb-[50px] text-[60px] text-primaryTextColor flex justify-center text-center">
        <h1>Projects</h1>
      </div>
      <div className="container mx-auto">
        {listOfProject.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
