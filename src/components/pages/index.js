import React, {useState} from 'react';
import SideBar from '../SideBar';
import Navbar from '../Navbar';
import WelcomeSection from '../WelcomeSection';
import InfoSection from '../infoSection';
import { homeObjOne } from '../infoSection/data';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        {/* <SideBar isOpen={isOpen} toggle={toggle}/> */}
        <Navbar toggle={toggle}/>
        <WelcomeSection/>
        <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home
