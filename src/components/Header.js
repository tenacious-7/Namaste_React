import { LOGO_URL } from "../utils/constant";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
            <img className = "image" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/about">About Us</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
};

export default Header;