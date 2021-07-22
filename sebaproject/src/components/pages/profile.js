import React, {Component} from 'react';
import Navbar from '../Navbar';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from "react-router-dom";
//import {Card,Container,CardHeader,CardMedia,CardContent} from '@material-ui/core';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Button} from '../ButtonElements';
import image from '../../images/cat.jpeg';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';


import "./review.css"
import "./profile.css"
//import { Button } from 'react-scroll';


export default class Profile extends Component{
  constructor (props) {
    super (props);

    this.state = {
      name : '',
      city : '',
      rating : ''
    }
  }

  /*onBookApp (e) {
    
    console.log("Booking Appointment for " + this.props.location.state.data.name);
    
   //when the "book appointment" button in clicked, the user is redirected to the appointment page
    window.location.href='/appointment';
    window.localStorage["doctor"] = this.props.location.state.data.name;
    window.localStorage["doctor_id"] = this.props.location.state.data._id;
}*/
  
  
  
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

    const {name, city, rating,speciality, _id} = this.props.location.state.data;

    return (
      <>
        <Navbar/>
        <Button to = "search" className= "backButton"> Back </Button>
            
        <div className="profilePage">
            <Card className="text-center">
              <CardTitle tag="h3">I'm Dr. {name}</CardTitle>
              <hr/>
              <CardText className="text-center">
                <Rating name="read-only" value={rating} readOnly />
                <br/><br/>
                <p>City: {city}</p>
                <p>Speciality: {speciality}</p>
              </CardText>
            </Card>
          

          </div>              
        </>
    );
  
  }

}