import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import "./shortprofile.css";


export default class DoctorEntry extends Component {
    constructor(props) {
        super(props);

        this.onBookApp = this.onBookApp.bind(this);

    }
    

    onBookApp (e) {
    
        console.log("Booking Appointment for " + this.props.name);
        
       //when the "book appointment" button in clicked, the user is redirected to the appointment page
        window.location.href='/appointment';
        window.localStorage["doctor"] = this.props.name;
    }

    render() {
        const {name, city, speciality, hospital} = this.props;

        //var stars = "*".repeat(rating);

        return (
            <div className="col-2">
                <Card>
                    <CardBody>
                        <h5>Name: {name}</h5>
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
}
