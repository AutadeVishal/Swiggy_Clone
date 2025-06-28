import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useListofRestaurants from "../utils/useListofRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withVegLabel } from "./RestaurantCard";
const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return (

      <h1>No Internet</h1>
    )
  }
  const {
    filteredRestaurants,
    searchText, listofRestaurants,
    setSearchText,
    filterTopRated

  } = useListofRestaurants();
  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }




  const RestaurantCardVeg = withVegLabel(RestaurantCard);
  //withVegLabel gives a component so restaurantCardVeg becomes component


  return (

    <div className="body">

      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className=" border-solid border-1 mx-5"
            value={searchText}
            onChange={(e) => 
              setSearchText(e.target.value)
            }
          />



          
        </div>

        <button className=" px-2  my-8 bg-green-300 rounded-lg" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
            {restaurant.isVeg
              ? <RestaurantCardVeg resData={restaurant} />
              : <RestaurantCard resData={restaurant} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
