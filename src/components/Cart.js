import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const handleRemove = (itemName) => {
        dispatch(removeItem(itemName));
    };
    const cartItems = useSelector((store) => store.cart.items);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <div className="p-2 mx-auto bg-amber-50 w-[300]">
            {cartItems.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-center justify-between bg-white rounded-lg shadow p-4 mb-3"
                >
                    <div>
                        <h1 className="font-bold text-lg">{item.name}</h1>
                        <p className="text-gray-600">Rs {item.price}</p>
                    </div>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-4"
                        onClick={() => handleRemove(item.name)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            {cartItems.length === 0 ? (
                <h1>Please Add Cart Items</h1>
            ) : (
                <button
                    className="p-2 m-aut bg-black text-white rounded-lg "
                    onClick={handleClearCart}
                >
                    Clear
                </button>
            )}
            <h3>Total Price {totalPrice}</h3>
        </div>
    );
};
export default Cart;