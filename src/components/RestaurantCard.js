const RestaurantCard = (props) => {
    const {name, image, cuisine, rating,deliveryTime,costForTwo,offer,isVeg,deliveryCharges,distance,availability} = props.resData;
    return (
        <div className="res-card">
            <h3>{name}</h3>
            <img
                className="res-logo"
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
}
export default RestaurantCard;