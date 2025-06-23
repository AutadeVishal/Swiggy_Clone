import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
const ItemList = (props) => {
    const item = props.data;
    const dispatch=useDispatch();
     const cartItems=useSelector((store)=>store.cart.items);
    const handleAddItem=(name)=>{
        dispatch(addItem(name))
        console.log(cartItems)
    }
    return ( 
        <div className="  w-6/12 mx-auto">
            <div>
                <span> <h2 className="font-bold">{item.name}</h2></span>
                <span  > <h2>Rs {item.price}</h2></span>
                <button className="rounded-lg bg-black text-white shadow-lg p-2 m-2" onClick={()=>handleAddItem(item.name)}>Add</button>
            </div>
            <p>{item.description}</p>
        </div>
    )
}
export default ItemList;