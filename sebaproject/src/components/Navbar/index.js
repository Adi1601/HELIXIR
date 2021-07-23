import React, {Component} from 'react';
import Navbar1 from "./Navbar1"
import Navbar2 from "./Navbar2"

let token = window.localStorage["jwtToken"];

export default class Navbar extends Component {
    render (){
        if (!token) {
            return <Navbar1/>
        }
        else{
            return <Navbar2/>
        }
    }
};
