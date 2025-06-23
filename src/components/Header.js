import LOGO_URL from "../utils/constants";
import {Link} from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState,useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState(null)
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);

    const cartItems=useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between bg-pink-50 p-5 shadow-lg m-2 h-45">
            <div className="h-45 ">
                <img className="h-30 m-2" src={LOGO_URL} />
            </div>
            <div className="py-2 px-1 my-12 bg-green-300 rounded-lg">
                {onlineStatus==true ? "Online":"X"}
            </div>
            <div className="flex items-center">
                <ul className="flex ">
                    <li  className="py-2 px-1 mx-5 bg-green-300 rounded-lg"><Link to="/">Home</Link></li>
                    <li  className="py-2 px-1 mx-5 bg-green-300 rounded-lg"><Link to="/about">About Us</Link></li>
                    <li  className="py-2 px-1 mx-5 bg-green-300 rounded-lg"><Link to="/contactus" > Contact Us </Link></li>
                    <li  className="py-2 px-1 mx-5 bg-green-300 rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <Link to="/cart" className="py-2 px-1 mx-5 bg-green-300 rounded-lg"

                    >Cart Items({cartItems.length})</Link>
                    <button className="login"
                    onClick={()=>{
                        btnNameReact==="Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login")
                    }}
                    >
                        {btnNameReact}
                    </button>
                    <li className="px-4 my-auto font-bold">({loggedInUser})</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;