
import Item from "./Item";
const ItemList = ({itemList}) => {
   
    return ( 
        <div className="  w-6/12 mx-auto">
           {itemList.map((item)=>
        <Item key={item.id} itemData={item}/>
        )}
        </div>
    )
}
export default ItemList;