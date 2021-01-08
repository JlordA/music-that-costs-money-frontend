import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <div className="navbarDiv">
            <NavLink to="/profile">Profile</NavLink>      <NavLink to="/forum">Forum</NavLink>      <NavLink to="/login">Logout</NavLink>
        </div>
    )
}

export default NavBar