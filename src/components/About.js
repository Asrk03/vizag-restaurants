import React from "react";
import {Outlet} from "react-router-dom";

const About = ()=>(
    <>
    <div className="About">
        <h1>Hello World!!</h1>
        <p>Thank you for visiting Food Clone. This website is a clone for swiggy built using only React and Tailwind</p>
        <Outlet/>
    </div>
    </>
)

export default About;