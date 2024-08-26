import Button from "./Components/button";

const About = () => {
  return (
    <section id="About">
      <div className="flex justify-between items-center gap-5 relative pb-10">
        <div className="w-3/5 ">
          <div className="bg-bg-div h-80 opacity-30 w-60 mt-16 rounded-lg"></div>
          <img
            src="/src/Assets/Images/pg1.png"
            alt="picture2"
            width={300}
            height={172}
            className="absolute z-10 top-0 left-10 flex justify-center items-center"
          />
        </div>
        <div className="w-2/5 text-white ">
          <h1 className="font-Roboto_Slab text-4xl font-semibold ">
            About
          </h1>
          <hr className="mb-10 w-11 bg-bg-div border-bg-div" />
          <p className=" font-Mulish leading-7 mb-3 pb-3">
            Godfred Adjetey is a dedicated web designer and developer with two
            years of experience in the field. Currently, he is a student at
            Accra Technical University, where he continues to refine his skills
            and deepen his knowledge in web development. His passion for
            creating dynamic and user-friendly websites drives his commitment to
            continuous learning and professional growth.
          </p>
          <div className="w-full flex gap-4 font-Mulish font-medium">
            <Button name={'Hire Me'}/>
            <Button name={"Download CV"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
