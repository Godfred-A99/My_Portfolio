import Button from "./Components/Button";

const About = () => {
  return (
    <section className=" relative flex justify-between w-full bg-bg-color min-h-screen px-28 xl:flex-row flex-col-reverse max-sm:px-10 gap-5">
      <div className="xl:w-2/5  flex justify-center py-10">
        <div className="relative bg-bg-div h-80 w-60 opacity-50 top-16 rounded-lg flex justify-center items-center max-lg:top-0 "></div>
        <div className="flex flex-col justify-center items-center max-lg:mt-0 z-10 absolute top-0 xl:top-4">

          <img
            src="/src/Assets/Images/pg1.png"
            alt="profile pic 1"
            width={320}
            height={200}
          />
        </div>
      </div>
      <div className="xl:w-2/5 w-full mt-5">
        <h1 className="text-white font-Roboto_Slab font-semibold text-4xl pb-1">
          About
        </h1>
        <hr className="w-10 border-bg-div bg-bg-div mb-10" />
        <p className=" text-slate-300 font-Mulish text-lg pb-5 mb-5">
          Godfred Adjetey is a dedicated web designer and developer with two
          years of experience in the field. Currently, he is a student at Accra
          Technical University, where he continues to refine his skills and
          deepen his knowledge in web development. His passion for creating
          dynamic and user-friendly websites drives his commitment to continuous
          learning and professional growth.
        </p>
        <div className="flex gap-2">
          <Button
            name="Download CV"
            icon={
              "/src/Assets/Icons/arrow_downward_20dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png"
            }
          />
          <Button name="Hire Me " />
        </div>
      </div>
    </section>
  );
};

export default About;
