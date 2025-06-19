//import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useResturantMenu from '../utils/useRestaurantMenu'
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {
  const { resId } = useParams();
 // const [resInfo, setResInfo] = useState(null);

 // useEffect(() => {
 //   fetchResInfo();
//}, [resId]);

  //const fetchResInfo = async () => {
    
   //   const resp = await fetch(`http://localhost:5000/api/menu/${resId}`);
   //   const json = await resp.json();
   //   setResInfo(json);  
  //};


  //we will use costom hook for Fetching Restaurant Info

  const resInfo=useRestaurantMenu(resId);
console.log("Hello")
  if (!resInfo) {
    return <div className="menu"><h2>Loading menu...</h2></div>;
  }
  return (
     
    <div className="menu">
      <h1>Menu for Restaurant #{resInfo.id}</h1>
      <ul>
        {resInfo.menu.map((item, idx) =>
          typeof item === "string" ? <li key={idx}>{item}</li> :
          <li key={item.id}>{item.name} – ₹{item.price}</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
