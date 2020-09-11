import React from 'react'
import { NavLink } from 'react-router-dom';
import {Menu} from 'semantic-ui-react'

const Navbar = (props) => {

    return (
            <Menu fixed='top' inverted>
                
                <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
                <Menu.Item as={NavLink} to="/search" exact>Search</Menu.Item>
                <Menu.Item as={NavLink} to="/map" exact>Map</Menu.Item>
                <Menu.Item as={NavLink} to="/userProfile" exact>Profile</Menu.Item>
                <Menu.Item as={NavLink} to="/takeaction" exact>Take Action</Menu.Item>
                
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