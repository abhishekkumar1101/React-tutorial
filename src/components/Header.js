import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Header = () =>{
    const [btnNameReact,setReactBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between bg-pink-300 pr-4">
        <div className="logo-container">
                <img className="w-56" src ={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="p-4 ">Online status : {onlineStatus?"🟢" : "🔴"}</li>
                <li className="p-4 "><Link to = "/about">About Us</Link></li>
                <li className="p-4 "><Link to = "/contact">Contact</Link></li>
                <li className="p-4 "><Link to = "/grocery">Grocery</Link></li>
                <li className="p-4 "><Link to = "/">Home</Link></li>
                <li className="p-4 "><Link to ="/cart">Cart</Link></li>
                <li className="p-4 ">{userContext}</li>
                <button className="p-4 " onClick = {
                    () =>{
                btnNameReact === "Login"? setReactBtn("Logout"): setReactBtn("Login");
                 }
                    }>{btnNameReact}</button>
            </ul>
        </div>
        </div>
    );
};
export default Header;