
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import RestaurantCategory from './RestaurantCategory';
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {
  const { resId } = useParams();
const [showIndex,setShowIndex]=useState(null);

  const resInfo=useRestaurantMenu(resId)
  if (!resInfo) {
    return <div className="menu"><h2>Loading menu...</h2></div>;
  }

  const categories=resInfo.menu.categories;
  return (
     
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{resInfo.menu.restaurantName}</h1>
      <ul>
        {categories.map((category,index)=>
        <RestaurantCategory key={category.id} 
        category={category}
         showItems={index===showIndex }
         setShowIndex={()=>setShowIndex(index===showIndex ? null:index)}
         />
      )}
     
      </ul>
    </div>
  );
};

export default RestaurantMenu;
