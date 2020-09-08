import React from 'react'
import { NavLink } from 'react-router-dom';
import {Menu} from 'semantic-ui-react'

const Navbar = (props) => {

    return (
            <Menu>
                
                <Menu.Item><NavLink to="/" exact>Home</NavLink></Menu.Item>
                <Menu.Item><NavLink to="/search" exact>Search</NavLink></Menu.Item>
                <Menu.Item><NavLink to="/map" exact>Map</NavLink></Menu.Item>
                <Menu.Item><NavLink to="/userProfile" exact>Profile</NavLink></Menu.Item>
                
                <Menu.Menu position='right'>
                    {props.user ? 
                        <Menu.Item onClick={props.logOutHandler} >Log Out</Menu.Item> 
                    :
                        <>
                        <Menu.Item href="/login" >Login</Menu.Item>
                        <Menu.Item href="/signup" >Create Account</Menu.Item>
                        </>
                    }
                </Menu.Menu>
            </Menu>
    )
}

export default Navbar