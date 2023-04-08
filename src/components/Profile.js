import React from "react";
import { Link } from "react-router-dom";
 const Profile = ()=>{
    return (
        <>
        <h1>Hello World!!</h1>
        <p>
            I am Arnab Sarkar pursuing B.Tech IT at <Link to ="https://vignaniit.edu.in">VIIT, Duvvada</Link>
            I built this website to practice how react and routing for a website 
        </p>
        </>
    )
 }
export default Profile;