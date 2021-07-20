import React from 'react';
import {SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='search' onClick={toggle}>
                        Search Doctors
                    </SidebarLink>
                    <SidebarLink to='tele' onClick={toggle}>
                        Teleconsultation
                    </SidebarLink>
                    <SidebarLink to='offers' onClick={toggle}>
                        Partner Offers
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/login'>
                        Log In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar 
