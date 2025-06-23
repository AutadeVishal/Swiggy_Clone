import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory=(props)=>{
const category=props.category;
const showItems=props.showItems;
const setShowIndex=props.setShowIndex;
const handleClick=()=>{
    setShowIndex();
}
return (
    <div>
        {/*header*/}
    <div className="w-6/12 bg-gray-100 shadow-2xl p-4 mx-auto my-5 flex justify-between  text-lg cursor-pointer" onClick={handleClick}>
        <span className="font-bold">{category.name}({category.items.length})</span>
        

    </div>


   {/*accordian body*/}
   {showItems && (
  <div className="w-6/12 mx-auto">
    {category.items.map((item) => (
      <ItemList key={item.id} data={item} />
    ))}
  </div>
)}
    </div>
)
}
export default RestaurantCategory; 