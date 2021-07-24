import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Profile from '../pages/profile';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import "./doctorsEntry.css";
import { requirePropFactory } from '@material-ui/core';
import logo from '../../images/helixir.png'

export default withRouter(class DoctorEntry extends Component {

    constructor (props) {
        super(props);
        this.onBookApp = this.onBookApp.bind(this);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){

        e.preventDefault();

        const doctorData = {
            name: this.props.name,
            city: this.props.city,
            rating: this.props.rating,
            speciality:this.props.speciality,
            _id: this.props._id,
        }

        console.log(doctorData);
        this.props.history.push({pathname: '/profile', state: {data: doctorData}});

    }

    onBookApp (e) {
    
        console.log("Booking Appointment for " + this.props.name);
        
       //when the "book appointment" button in clicked, the user is redirected to the appointment page
        window.location.href='/appointment';
        window.localStorage["doctor"] = this.props.name;
        window.localStorage["doctor_id"] = this.props._id;
        console.log(this.props._id);
    }

    render() {
        const {name, city, speciality, hospital, _id} = this.props;

        //var stars = "*".repeat(rating);


        return (
            <>
            <div className="col-2">
                <Card id="doctorCard">
                    <img id="doctorImage"src={logo}/>
                    <div className="cardInfo">

                        <CardTitle>
                                <h4 id="doctorCardTitle"><b>Dr. {name}  </b> 
                                <a onClick={this.onClick}> [more info] </a> </h4>
                        </CardTitle>
                        <CardBody id="doctorCardBody">
                                <CardText id="doctorCardText"> <b>City:</b> {city}</CardText>
                                <CardText id="doctorCardText"><b>Speciality:</b> {speciality}</CardText>
                                <CardText id="doctorCardText"><b>Hospital: </b>{hospital}</CardText>
                                <br/> 
                                <button onClick={this.onBookApp} className="appointmentButton">
                                    Book Appointment
                                </button>
                        </CardBody>
                        </div>

                </Card>

            </div>
        </>
        );
    }
})
