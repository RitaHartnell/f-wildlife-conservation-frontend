import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
            <div className="nav-bar">
            <NavLink to="/" exact activeStyle={{background: 'darkgray'}}>Home</NavLink>
            <NavLink to="/Search" exact activeStyle={{background: 'darkgray'}}>Search</NavLink>
            <NavLink to="/UserProfile" exact activeStyle={{background: 'darkgray'}}>Profile</NavLink>
            </div>
    )
}

export default Navbar