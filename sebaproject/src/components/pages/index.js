import React, {useState} from 'react';
import Navbar from '../Navbar';
import WelcomeSection from '../WelcomeSection';
import InfoSection from '../infoSection';
import { homeObj2, homeObj3, homeObjOne } from '../infoSection/data';
import Services from '../Services';
import Footer from '../Footer';

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
        <InfoSection {...homeObj2}/>
        <InfoSection {...homeObj3}/>
        <Services/>
        <Footer/>
        </>
    );
}

export default Home
