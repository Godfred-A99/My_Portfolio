import Card from "./Components/Card";

const Projects = () => {
  return (
    <section className="bg-bg-color1 px-28 py-5 flex-col xl:flex-row  w-full  ">
      <div className="">
        <h2 className="font-Roboto_Slab text-4xl text-white text-center font-bold pb-1">
          Projects
        </h2>
        <hr className="w-20 border-bg-div m-auto" />
        <div className="flex justify-center items-center gap-4 py-10 ">
            <Card />
            <Card />
            <Card />

        </div>
      </div>
    </section>
  );
};

export default Projects;
