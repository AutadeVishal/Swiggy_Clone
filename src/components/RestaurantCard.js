const RestaurantCard = (props) => {
    const {name, image, cuisine, rating,deliveryTime,costForTwo,offer,isVeg,deliveryCharges,distance,availability} = props.resData;
    return (
        <div className="m-3  w-[250]  border h-[400] bg-gray-100 rounded-2xl shadow-lg hover:bg-gray-200">
            <h3 className="font-bold  my-5 text-2xl" >{name}</h3>
            <img
                className="w-[196] h-[100] rounded-2xl"
                src={image}
                alt="food" 
            />
            <h4>{cuisine}</h4>
            <h4>⭐ {rating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{offer}</h4>
            <h4>{isVeg}</h4>
            <h4>{deliveryCharges}</h4>
            <h4>{distance}</h4>
            <h4>{availability}</h4>
        </div>
    )
};


//Higher Order Componet for isVeg
//input-RestaurantCard  output-RestaurantCardVeg
export const withVegLabel=(RestaurantCard)=>{
    return (props) =>{//this is new component it will have promoted label
        //this inside component is returnered to restaurantCardVeg in body.js therefore props given to him will be in this return statement
        return (
            <div>
                <label className="absolute bg-green-200 text-black mx-[11]  px-3 rounded-lg ">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )


    }
};
//withVEgLabel is higher order component(function) taking RestaurantCard
//as a input and return anather component
export default RestaurantCard;
