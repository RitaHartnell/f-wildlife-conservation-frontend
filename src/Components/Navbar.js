import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    return (
            <div className="nav-bar">
            <NavLink to="/" exact activeStyle={{background: 'darkgray'}}>Home</NavLink>
            <NavLink to="/search" exact activeStyle={{background: 'darkgray'}}>Search</NavLink>
            <NavLink to="/userProfile" exact activeStyle={{background: 'darkgray'}}>Profile</NavLink>
            <NavLink to="/signup" exact activeStyle={{background: 'darkgray'}}>Create Account</NavLink>
            
            {props.user ? 
                <p onClick={props.logOutHandler} >Log Out</p> 
            :
                <NavLink to="/login" exact activeStyle={{background: 'darkgray'}}>Login</NavLink>
            }
            </div>
    )
}

export default Navbar