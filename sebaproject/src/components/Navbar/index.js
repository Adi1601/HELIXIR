import React, {Component} from 'react';
import Navbar1 from "./Navbar1"
import Navbar2 from "./Navbar2"

let token = window.localStorage["jwtToken"];


export const navbarLocation = {
    home:1,
    profile:2,
    search:3,
}
  
  

export default class Navbar extends Component {

    render (){
        if (!token) {
            return <Navbar1 myLocation={this.props.myLocation}/>
        }
        else{
            return <Navbar2 myLocation={this.props.myLocation}/>
        }
    }
};
