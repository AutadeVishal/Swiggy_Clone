import { useEffect, useState } from "react";

const useListofRestaurants = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    
    searchByText()
  },
    [searchText]);

  useEffect(() => {
    
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/api/restaurants");
    const json = await data.json();
    setListofRestaurants(json);
    setFilteredRestaurants(json); // Initialize with full list to show all when empty
  };

  const filterTopRated = () => {
    const topRated = listofRestaurants.filter((res) => (res.rating >= 4.5 && res.name.toLowerCase().includes(searchText.toLowerCase())));
    setFilteredRestaurants(topRated);
  };

  const searchByText = () => {
    const filtered = listofRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return {
    listofRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    filterTopRated
  };
};

export default useListofRestaurants;
