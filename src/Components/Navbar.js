import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <div className="navbarDiv">
            <NavLink to="/profile">
                <p>Profile</p>
            </NavLink>
            <NavLink to="/forum">
                <p>Forum</p>
            </NavLink>
            <NavLink to="/login">
                <p>Logout</p>
            </NavLink>
        </div>
    )
}

export default NavBar