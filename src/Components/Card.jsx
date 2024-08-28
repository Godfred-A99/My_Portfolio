import Button from "./Button"


const Card = ({img,alt,title,description}) => {
  return (
    <div className="w-80 bg-bg-color rounded-lg">
        <img src={img} alt={alt} />
        <div className="flex justify-center items-center">
            <h3>{title}</h3>
            <p>{description}</p>
            <Button />
        </div>
    </div>
  )
}

export default Card