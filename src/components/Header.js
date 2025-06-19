import LOGO_URL from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const onlineStatus=useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="online-status">
                {onlineStatus==true ? "Online":"X"}
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactus" > Contact Us </Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;