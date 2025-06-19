import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useListofRestaurants from "../utils/useListofRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
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

  const onlineStatus=useOnlineStatus();

if(onlineStatus==false) {
  console.log("Offline")
  return (

    <h1>No Internet</h1>
  )
}
if(onlineStatus==true){
  console.log("ONline")
}
  if (listofRestaurants.length === 0) {
    console.log("Shimmer done")
    return <Shimmer />;
  }

  return (
    
    <div className="body">
      
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchByText}>Search</button>
        </div>

        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
