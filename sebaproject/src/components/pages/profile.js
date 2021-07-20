import React, {Component} from 'react';
import Navbar from '../Navbar';
import Rating from '@material-ui/lab/Rating';
import {Card,Container,CardHeader,CardMedia,CardContent} from '@material-ui/core';
//import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
//import {Button} from '../ButtonElements';
import axios from 'axios';


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

    const {name, rating, city} = this.props;

    return (
      <>
        <Navbar/>

        <Card>
          <CardMedia height="140" image="https://rabbit-spa.de/wordpress/wp-content/uploads/2017/07/arzt.jpg"/>
        </Card>

        <div className="profilePage">
            <Card width="40%">
              <CardMedia height="140" image="../../images/cat.jpeg"/>
              <CardContent>
                <Rating name="read-only" value={rating} readOnly />
                <p>City: {city}</p>
              </CardContent>
            </Card>
            
            <div className="doctorProfileInfo">
              <h2>I'm Dr. {name} </h2>
              
            </div>
          </div>              
               
        
        </>
    );
  
  }

}