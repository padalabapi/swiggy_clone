import React, { useEffect, useState } from "react";
import { img_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline"
const Header = () => {
    const [btnname , setbtnname] = useState("LogIn");
    console.log("header render");
    

    useEffect( () =>{
        console.log("useEffect call's")
    },[btnname]);

    const online = useOnline();
    
    return(
        <div className="flex justify-between bg-gray-100 shadow-md rounded-xl broder solid black">
            <div className="ml-2.5 my-2.5">
                <img className="w-20 h-20 rounded-full" src={img_url}/>
            </div>
            <div className="flex align-middle">
                <ul className="flex p-5 m-5 ">
                    <li className="mr-10">online : {online ? "✓	" : "𐄂"}</li>
                    <Link to="/"><li className="mr-10">Home</li></Link>
                    <Link to="/about"><li className="mr-10">About</li></Link>
                    <Link to="/contact"><li className="mr-10">Contact Us</li></Link>
                    <li className="mr-10">Cart</li>
                    <li className="mr-10"><button className="" onClick={() =>{
                        btnname === "LogIn" ?setbtnname("LogOut"):setbtnname("LogIn");
                    }
                        }>{btnname}</button></li>
                </ul>
                

                </div>
        </div>
    );
}

export default Header