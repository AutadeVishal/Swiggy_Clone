
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
const Item=({itemData})=> {
    const {name,price,description,imageId}=itemData;
    const dispatch=useDispatch();
    const imageUrl = imageId.startsWith('http') ? imageId : `https://your-image-cdn.com/${imageId}.jpg`;
    const handleClick=(item)=>{
        dispatch(addItem(item));
    }
    return (
        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden m-4 hover:shadow-lg transition-shadow duration-300">
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-lg text-amber-600 font-bold mb-2">₹{price}</p>
                <p className="text-gray-600 mb-3">{description}</p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow transition-colors duration-200" onClick={()=>handleClick(itemData)}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Item