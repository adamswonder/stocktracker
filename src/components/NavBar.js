import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="nav">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/addstock">Add Stock</NavLink>
        </nav>
    )
}

export default NavBar