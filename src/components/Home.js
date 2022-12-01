import React from "react";
import { NavLink } from "react-router-dom";
const HomePage = () =>{
    return(
        <div>
            <h1>Welcome to  Home Page</h1>
            <NavLink to="/login">Navigate to Login Page</NavLink>
            </div>
        
    )
}
export default HomePage;