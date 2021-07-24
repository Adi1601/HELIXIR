import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { navbarLocation } from '.';

const Navbar1 = ({toggle, myLocation}) => {

    return (
        <>
        <Nav>
            <NavbarContainer>
                <img src='../../images/helixir.png'/>
                <NavLogo to="/">HELIXIR</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/search' highlighted = {myLocation === navbarLocation.search} >Search Doctors</NavLinks>
                    </NavItem>
                     {/*<NavItem>
                        <NavLinks to='/tele/form'>Teleconsultation</NavLinks>
                    </NavItem>
                     <NavItem>
                        <NavLinks to='/offers'>Partner Offers</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/signup'>Sign Up</NavLinks>
                    </NavItem> */}
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
