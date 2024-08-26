import Button from "./button";

const Cards = ({ image, description, }) => {
  return (
    <div className="w-60 h-60 rounded-sm ">
      <div className="">{Image}</div>
      <div className="text-sm text-white text-center">{description}</div>
          <div className="flex justify-center gap-2">
          <Button name={'View'}/>
          <Button name={'V'}/>
          </div>
        </div>

  );
};

export default Cards;
