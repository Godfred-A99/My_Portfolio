import Button from "./Button";

const Card = ({ img, alt, title, description, width, height }) => {
  return (
    <div className="w-80 bg-bg-color rounded-lg">
      <a href="">
        <img src={img} alt={alt} width={width} height={height} />
      </a>
      <div className="flex justify-center items-center">
        <h3 className="font-Roboto_Slab text-white  text-lg text-center font-semibold">
          {title}
        </h3>
        <p className="font-Mulish text-gray-300 text-sm">{description}</p>
        <Button />
      </div>
    </div>
  );
};

export default Card;
