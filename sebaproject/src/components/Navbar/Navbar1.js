import React from 'react'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import { navbarLocation } from '.';

const Navbar1 = ({toggle, myLocation}) => {

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
                        <NavLinks to='/search' highlighted = {myLocation === navbarLocation.search} >Search Doctors</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar1;
