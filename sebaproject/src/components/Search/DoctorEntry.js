import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import "./doctorsEntry.css";
import logo from '../../images/user.png'


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
            hospital: this.props.hospital,
            _id: this.props._id,
        }

        this.props.history.push({pathname: '/profile', state: {data: doctorData}});

    }

    onBookApp (e) {
    
        console.log("Booking Appointment for " + this.props.name);
        
       //when the "book appointment" button in clicked, the user is redirected to the appointment page
        window.location.href='/appointment';
        window.localStorage["doctor"] = this.props.name;
        window.localStorage["doctor_id"] = this.props._id;
        window.localStorage["doctor_speciality"] = this.props.speciality;
        console.log(this.props._id);
    }

    render() {
        const {name, city, speciality, hospital, avg_rating, _id} = this.props;


        return (
            <>
            <div className="col-2">
                <Card id="doctorCard">
                    <img id="doctorImage"src={logo} alt="userImage"/>
                    <div className="cardInfo">

                        <CardTitle>
                                <h4 id="doctorCardTitle">
                                    <b>Dr. {name}  </b> 
                                    <a onClick={this.onClick}> [more info] </a>
                                 </h4>
                                <Rating name="read-only" value={avg_rating}  id="ratingSearch" readOnly />
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
