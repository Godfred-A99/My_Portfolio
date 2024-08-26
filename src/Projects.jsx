import Cards from "./Components/Cards";

const Projects = () => {
  return (
    <section id="Projects">
      <div className="flex items-center justify-center">
        <div className="mt-3">
          <h1 className="text-white font-Roboto_Slab text-4xl text-center mb-1">
            Projects
          </h1>
          <hr className="mb-10 w-20 bg-bg-div border-bg-div left-10 border-" />
        </div>
      </div>
      <Cards />
    </section>
  );
};

export default Projects;
