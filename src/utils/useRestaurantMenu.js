import { useEffect, useState } from 'react';


const useRestaurantMenu= (resId)=>{
    const [resInfo,setResInfo]=useState(null);
 useEffect(()=>{
fetchData();
 },[])
const fetchData = async () => {
    
      const resp = await fetch(`http://localhost:5000/api/menu/${resId}`);
      const json = await resp.json();
      setResInfo(json);
  };
return resInfo;
}
export default useRestaurantMenu;