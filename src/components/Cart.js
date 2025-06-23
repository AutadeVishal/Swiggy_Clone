import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())//dispatch calls specific reducer to perform some task
    }
    const cartItems=useSelector((store)=>store.cart.items)
    return (
        <div>
            {cartItems.map((item,idx)=>{
                return <h1 className="font-bold"key={idx}>{item}</h1>
            })}
           
            {cartItems.length==0 ?  <h1>Please Add Cart Items</h1> :
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
            >
                Clear
            </button>}
        </div>
    )
}
    export default Cart;