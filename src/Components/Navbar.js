import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <ul>
            <NavLink to="/profile">
                <li>Profile</li>
            </NavLink>
            <NavLink to="/forum">
                <li>Forum</li>
            </NavLink>
            <NavLink to="/forum/new">
                <li>Post 2 Tokai</li>
            </NavLink>
        </ul>
    )
}

export default NavBar