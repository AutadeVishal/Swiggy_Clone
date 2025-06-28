import ItemList from "./ItemList";
const RestaurantCategory=({category,showItems,setShowIndex})=>{
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
      <ItemList  key={category.id} itemList={category.items} />
  </div>
)}
    </div>
)
}
export default RestaurantCategory; 