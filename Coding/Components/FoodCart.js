import { IMG_CDN_URL } from "../constants";
 
const FoodCart = ({
  cloudinaryImageId,
  name,
  price,
 description
}) => {
   
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      
      <h3>{price/100}</h3> 
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          { description}
        </h4>
        
      </span>
    </div>
  );
};

export default FoodCart;
