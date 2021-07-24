import React, {Component} from 'react';
import Navbar from '../Navbar';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from "react-router-dom";
//import {Card,Container,CardHeader,CardMedia,CardContent} from '@material-ui/core';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Button} from '../ButtonElements';
import axios from 'axios';
import logo from '../../images/helixir.png'
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
      rating : '',
      doc_id : '',
      avgrat : '',
      comments : [],
    }
  }

  componentDidMount() {

    console.log("fetching details for " + this.props.location.state.data._id);

    const data = {
      doctor_id : this.props.location.state.data._id,
    }

    axios.post('http://localhost:5000/review/loadprofile', data)
        .then( (res) => {
            this.setState({comments : res.data.review});
            this.setState({avgrat : res.data.rating});
            //for(let i=0; i<docs.length; i++) {
            //    console.log("doctors rec: " + docs[i].name);
            //}
            //this.setState({ doctors: docs})
            console.log(this.state.avgrat);
            console.log(res.data.message);
        })
        .catch(function(err) {
            console.log("Rec Err: " + err.response);
    });

  }


  render() {


    const {name, city, rating, speciality,id} = this.props.location.state.data;

    const longreviews = this.state.comments;
    const Comments = longreviews.map((review, index) => {
      console.log(review.comment);
      return <div>{review.comment}{review.rating}</div>;
    });

    return (
      <>
        <Navbar/>
        <Button to = "search" id="backButton"> Back </Button>
            
        <div className="profilePage">
            <Card className="text-center">
              <CardImg top width="100%" src={logo}/>
              <CardBody>
                <CardTitle tag="h3">I'm Dr. {name}</CardTitle>
                <hr/>
                <CardText className="text-center">
                  <Rating name="read-only" value={this.state.avgrat} readOnly />
                  <br/><br/>
                  <p>City: {city}</p>
                  <p>Speciality: {speciality}</p>
                </CardText>
              </CardBody>
            </Card>
            <div>
              {Comments}
            </div>
        </div>              
      </>
    );
  
  }

}