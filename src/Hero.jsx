import Button from "./Components/Button";

const Hero = () => {
  return (
    <section className="w-full px-28  bg-bg-color flex  xl:flex-row flex-col justify-between items-center min-h-screen gap-5 max-sm:px-5">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:px-5 w-full">
        <p className="font-Mulish text-lg  text-txt-color opacity-40 pb-5">
          Hello !
        </p>
        <h1 className="font-Roboto_Slab font-bold text-7xl max-lg:text-5xl text-white mb-5 ">
          I'm <span className="text-txt-color">Godfred</span>
        </h1>
        <p className="font-Mulish text-sm font-semibold text-slate-300 mb-5 pb-5 w-full "></p>
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
          width={350}
          height={200}
        />
      </div>
    </section>
  );
};

export default Hero;
