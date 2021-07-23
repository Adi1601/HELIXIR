import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar2 = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">HELIXIR</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/search'>Search Doctors</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/tele/form'>Teleconsultation</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to=''>Logout</NavLinks>
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
