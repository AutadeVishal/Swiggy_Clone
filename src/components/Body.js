import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useListofRestaurants from "../utils/useListofRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withVegLabel } from "./RestaurantCard";
const Body = () => {
  // const [listofRestaurants, setListofRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  /* useEffect(() => {
     fetchData();
   }, []);
 
   const fetchData = async () => {
     const data = await fetch("http://localhost:5000/api/restaurants");
     const json = await data.json();
     console.log("Fetched Restaurant Data");
     setListofRestaurants(json);
     setFilteredRestaurants(json);
   };
 */
  //we wil move our Fetching Logic outside body.js for modulairity
  const {
    filteredRestaurants,
    searchText,
    setSearchText,
    filterTopRated,
    searchByText,
    listofRestaurants,
  } = useListofRestaurants();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    console.log("Offline")
    return (

      <h1>No Internet</h1>
    )
  }
  if (onlineStatus == true) {
    console.log("ONline")
  }
  if (listofRestaurants.length === 0) {
    console.log("Shimmer done")
    return <Shimmer />;
  }


  const RestaurantCardVeg=withVegLabel(RestaurantCard);//withVegLabel gives a component so restaurantCardVEg becomes component


  return (

    <div className="body">

      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className=" border-solid border-1 mx-5"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
          className="py-2 px-1 bg-green-300 rounded-lg"
            onClick={searchByText}
          >Search
          </button>
        </div>

        <button className=" px-2  my-8 bg-green-300 rounded-lg" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
            {restaurant.isVeg
              ? <RestaurantCardVeg resData={restaurant}/>
              : <RestaurantCard resData={restaurant} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
