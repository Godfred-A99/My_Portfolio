const Hero = () => {
  return (
    <section id="/" >
      <div className="flex justify-between  items-center w-full pb-5 ">
        <div className="">
            <p className=" text-sm text-white pl-2 ">Hello</p>
            <h2 className="text-8xl text-orange-400 pb-3"><span className="text-white">I'm </span>Godfred </h2>
            <p></p>
            <div>
                <button>Contact</button>
            </div>
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
