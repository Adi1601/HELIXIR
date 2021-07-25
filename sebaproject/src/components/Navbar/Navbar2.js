import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import axios from 'axios';
import { navbarLocation } from '.';

const Navbar2 = ({toggle, myLocation}) => {

    const onClick = (e) => {
        e.preventDefault();
        //let token = window.localStorage["jwtToken"];

        localStorage.removeItem('jwToken');
        localStorage.clear();
        axios.post('http://localhost:5000/users/logout')
        .then( (res) => {
            window.location.href='/';
        })
        .catch((error) => {alert(error.message)});
      
    }
   

    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/"> HELIXIR</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/search' highlighted = {myLocation === navbarLocation.search}> Search Doctors</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/homep'highlighted = {myLocation === navbarLocation.profile} > My Appointments</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={(e) => onClick(e)}>Logout</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to='/offers'>Partner Offers</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/signup'>Sign Up</NavLinks>
                    </NavItem> */}
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar2;
