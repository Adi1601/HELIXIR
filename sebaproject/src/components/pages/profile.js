import React, {Component} from 'react';
import Navbar from '../Navbar';
import Rating from '@material-ui/lab/Rating';
//import {Card,Container,CardHeader,CardMedia,CardContent} from '@material-ui/core';
//import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Button} from '../ButtonElements';
import image from '../../images/cat.jpeg';


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

    const {name, city, rating} = this.props.location.state.data;

    return (
      <>
        <Navbar/>
        <Button to = "search" className= "backButton"> Back </Button>
      
            
        <div className="profilePage">
            <Card className="cardProfile">
              <CardTitle tag="h5">I'm Dr. {name}</CardTitle>
              <CardText>
                <Rating name="read-only" value={rating} readOnly />
                <p>City: {city}</p>
              </CardText>
            </Card>
            

          </div>              
        </>
    );
  
  }

}