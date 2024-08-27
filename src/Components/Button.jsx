const Button = ({ name, icon }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-Mulish text-lg leading-none bg-bg-div text-bg-color rounded-lg ">
      {name}
      {icon && (
        <img
          src={icon}
          alt="call Icon"
          className="ml-2 rounded-full w-h h-5 "
        />
      )}
    </button>
  );
};

export default Button;
