import React, {Component} from 'react';
import Navbar from '../Navbar';
import Rating from '@material-ui/lab/Rating';
//import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
//import {Button} from '../ButtonElements';
import axios from 'axios';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';

import "./review.css"
import "./profile.css"


export default class Profile extends Component{
  
  
  /*fetchUserDetails=(user_id)=>{
    //console.log(user_id);
    axios.get("http://localhost:5000/userapi/getUserDetails/"+user_id,{
        headers: {
            "content-type": "application/json"
          }
    }).then(res=>{
        console.log(res);
        this.setState({email:res.data.results[0].email});
        this.setState({profileImage:res.data.results[0].profileImage})
    })
    .catch(err=>console.log(err))
}*/

  render() {

    //const {name, rating, city} = this.props;
    const name = "Grumpy"
    const city = "Munich"
    const rating = 4

    return (
        <>
        <Navbar/>
            
            <div className="profilePage">
              <div className="doctorSide">
                <img src= 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fdoctor-picture-id519926998%3Fk%3D6%26m%3D519926998%26s%3D170667a%26w%3D0%26h%3DmytfB7yHbCQGbYXpsrtZFJPMRvUEEguINzh6NPiMx6Q%3D&f=1&nofb=1'/>
              </div>

              <div className="doctorProfileInfo">
                  <h2>I'm Dr. {name} </h2>
                  <div> 
                    <Rating name="read-only" value={rating} readOnly />
                    <p>City: {city}</p>

                  </div>
              </div>
            </div>
               
        
        </>
    );
  
  }

}