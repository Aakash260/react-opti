import { IMG_CDN_URL } from "../constants"
import { useDispatch } from "react-redux"
import {removeItems} from "./cartSlice"
 
const FoodCart = ({
imageId,
  name,
  price,
 category,
id
}) => {
   const dispatch=useDispatch()
   const handleRemove=(id) => {
    dispatch(removeItems(id))
   }
  
  return (
    <div key={id} className="card margin">
      <img src={IMG_CDN_URL + imageId} />
      <h3>{name}</h3>
      <h3>{price/100}</h3> 
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          { category}
        </h4>  
      </span>
      <button className="rem"onClick={()=>handleRemove(id)}>Remove</button>
    </div>
  );
};

export default FoodCart;
