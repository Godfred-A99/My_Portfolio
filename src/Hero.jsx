import Button from "./Components/button";

const Hero = () => {
  return (
    <section id="/">
      <div className="flex justify-between items-center w-full pb-5 relative gap-2">
        <div className="">
          <p className=" text-sm text-white pl-2 mt-10  font-Mulish">Hello</p>
          <h2 className="text-8xl text-txt-color   font-Roboto_Slab font-medium">
            <span className="text-white">I'm </span>Godfred
          </h2>
          <p className="text-white text-lg font-Mulish">
            A Web Designer <br /> & Developer
          </p>
          <Button name={"Contact Me"} />
        </div>
        <div className="flex justify-center items-center pr-10">
          <img
            src="/src/Assets/Images/pg2.png"
            alt="Profile Pic 1"
            width={300}
            height={150}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
