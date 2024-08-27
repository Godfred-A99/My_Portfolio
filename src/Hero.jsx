import Button from "./Components/Button";

const Hero = () => {
  return (
    <section className="w-full px-28  bg-bg-color flex  xl:flex-row flex-col justify-between items-center min-h-screen gap-5 max-sm:px-10">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:px-5 w-full">
        <p className="font-Mulish text-lg  text-txt-color opacity-40 pb-5">
          Hello !
        </p>
        <h1 className="font-Roboto_Slab font-bold text-7xl max-lg:text-5xl text-white">
          I'm <span className="text-txt-color">Godfred</span>
        </h1>
        <p className="font-Mulish text-sm font-semibold text-slate-300 py-5 w-full ">
          Godfred Adjetey is a dedicated web designer and developer with two
          years of experience in the field. Currently, he is a student at Accra
          Technical University, where he continues to refine his skills and
          deepen his knowledge in web development. His passion for creating
          dynamic and user-friendly websites drives his commitment to continuous
          learning and professional growth.
        </p>
        <Button
          name="Contact Me "
          icon={
            "/src/Assets/Icons/call_20dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png"
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/src/Assets/Images/pg2.png"
          alt="profile pic"
          width={400}
          height={200}
        />
      </div>
    </section>
  );
};

export default Hero;
