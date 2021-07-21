import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Profile from '../pages/profile';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import "./shortprofile.css";


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
        }

        console.log(doctorData);
        this.props.history.push({pathname: '/profile', state: {data: doctorData}});

    }

    onBookApp (e) {
    
        console.log("Booking Appointment for " + this.props.name);
        
       //when the "book appointment" button in clicked, the user is redirected to the appointment page
        window.location.href='/appointment';
        window.localStorage["doctor"] = this.props.name;
        window.localStorage["doctor_id"] = this.props.key;
    }

    render() {
        const {name, city, speciality, hospital} = this.props;

        //var stars = "*".repeat(rating);


        return (
            <div className="col-2">
                <Card>
                    <CardTitle>
                        <a onClick={this.onClick}> <h3>Dr. {name}</h3></a>
                    </CardTitle>
                    <CardBody>
                        <CardText>City: {city}</CardText>
                        <CardText>Speciality: {speciality}</CardText>
                        <CardText>Hospital: {hospital}</CardText>
                        <ButtonWrapper>
                          <Button onClick={this.onBookApp}>
                              Book Appointment
                          </Button>
                        </ButtonWrapper>
                    </CardBody>
                </Card>
            </div>
        );
    }
})
