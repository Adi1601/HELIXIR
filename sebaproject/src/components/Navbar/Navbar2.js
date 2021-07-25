import React from 'react'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks} from './NavbarElements';
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
                <NavLogo to="/">
                   <img src='https://i.postimg.cc/wRYjt99h/hexilir2.png' border='0' alt='hexilir2'/>
                   HELIXIR
                </NavLogo>
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
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar2;
