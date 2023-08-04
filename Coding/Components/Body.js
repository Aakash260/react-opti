import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper"; // For reusability or readability filterData function is added in Helper.js file of Utils folder
import useResData from "../Hooks/useResData"; // imported custom hook useResData which gives All Restaurant and  Filtered Restaurant data from swigy api
import useOnline from "../Hooks/useOnline"; // imported custom hook useOnline which checks user is online or not
import UserOffline from "./UserOffline";

 
const Body = () => {
  
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();
   
  if (!isOnline) {
    return <UserOffline />
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

   
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
    
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          
          onChange={(e) => {
            setSearchText(e.target.value);
             
            searchData(e.target.value, allRestaurants);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

 
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Body;
