import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import { findByLabelText } from '@testing-library/dom';

export const Nav = styled.nav`
    background: #1D3D75;
    height: 80px;
    /*margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transistion: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    
    &:hover{
        color:#fff;
    }
    
    &:active{
        font-weight: 400;
    }
    `;
    
export const NavLinks = styled(LinkR)`
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        color:#fff;
        background-color:#152d56;
        border-radius: 10px;
    }
    &:active{
        font-weight: bolder;
        background-color:#152d56;
        border-bottom: 3px solid #010606;
    }
`;

 export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
    `;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-allign: center;
    margin-right: -22px;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
    `;

export const NavItem = styled.li`
    height: 80px;
    `;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #fff;
    font-weight: bold;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transistion: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transistion: all 0.2s ease-in-out;
        background: #E6AF2E;
        color: #010606;
    }
`;
