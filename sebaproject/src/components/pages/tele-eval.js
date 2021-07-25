import React, {Component} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TeleEvalForm from './tele-eval-form';


const TeleEval = () =>{

    return(
        <>
         <Navbar/>
         <TeleEvalForm/>
         <Footer/>
        </>
    );
}

export default TeleEval