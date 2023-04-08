import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="flex justify-between bg-slate-100">
            <h1 className="flex py-4 text-3xl font-medium ml-5 font-mono"><Link to = "/">Vizag Restaurants</Link></h1>
            <div className="nav-items">
                <ul className="flex py-6 mr-10 font-mono">
                    <li className="px-2 mx-2">
                    <Link to="/" >Home</Link>
                    </li>
                    <li className="px-2 mx-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;