const About = () => {
  return (
    <section id="About">
      <div className="flex justify-between items-center gap-5">
        <div className="w-3/5">
          <div></div>
          <img
            src="/src/Assets/Images/pg1.png"
            alt="picture2"
            width={300}
            height={172}
          />
        </div>
        <div className="w-2/5 text-center text-white ">
          <h1 className="font-Roboto_Slab text-2xl">About</h1>
          <hr />
          <p className=" font-Mulish text-sm">
            Godfred Adjetey is a dedicated web designer and developer with two
            years of experience in the field. Currently, he is a student at
            Accra Technical University, where he continues to refine his skills
            and deepen his knowledge in web development. His passion for
            creating dynamic and user-friendly websites drives his commitment to
            continuous learning and professional growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
