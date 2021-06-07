import React, {useState} from 'react';
import SideBar from '../SideBar';
import Navbar from '../Navbar';
import WelcomeSection from '../WelcomeSection';
import InfoSection from '../infoSection';

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
        <InfoSection/>
        </>
    );
}

export default Home
