import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Navbar, { navbarLocation } from '../Navbar';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

import logo from '../../images/user.png'
import { AiOutlineMail } from 'react-icons/ai'

import "./css/patientview.css";
import "../Search/doctorsEntry.css";

let token = window.localStorage["jwtToken"];


export default class PatientView extends Component{
  constructor(props) {
    //acess and call functions on an object's parent
    super(props);
    this.state = {
			username: "",
			email: "",
			user_appointments: []
		}
		
	this.renderItems = this.renderItems.bind(this);
  } 
  
  componentDidMount() {

		if (localStorage.getItem("jwtToken") !== null) {
			    let token = localStorage.getItem("jwtToken");
				let base64Url = token.split(".")[1];
    			let base64 = base64Url.replace("-", "+").replace("_", "/");
    			//atob() function decodes a string of data which has been encoded using Base64 encoding.
				let userJ = JSON.parse(window.atob(base64));
				console.log(userJ);

				this.setState({username : userJ.username},this.findRoutes );     
				this.setState({email : userJ.email});
				
				//I've tryed to put ${this.state.username}, but setState() is asynchronous, so I can't control when it actually updates the username, so the axios gets nothing as req.params because username is empty
				axios.get(`http://localhost:5000/appointment/${userJ.username}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
					},
				})
				  .then(res => {
					console.log(res.data);
					this.setState({ user_appointments: res.data});
					//console.log(res.data);
				  })
				  .catch((err) => {
					console.log(err);
				  })
								
		}
	}

	
  
  renderItems() {
  	if(this.state.user_appointments) {
  		return(
	    this.state.user_appointments.map(function(item) {
	    	return (
	    	<div id="patient_view_card" >
				
				<Card id="appointmentCard">
				    <Card.Body id="cardLayout">
						<div>
							<Card.Title><b> Dr. {item.doctor_name} </b></Card.Title>
							<Card.Text id="infoAppointment">
								<p>When: {item.date.split('T')[0]},  { item.start_time}:00 (CET)</p>
								<p>Doctor's speciality: {item.doctor_speciality}</p>
								<p>Motive: {item.motive}</p>
							</Card.Text>
						</div>	
						<a href='/tele'>
							<button className="appointmentButton">
									Start Appointment
							</button>
						</a>
				     
				    </Card.Body>

			</Card>
			
			</div>
			)
	    })
	    )
    }
  }

    render() {
        if (!token) {
            return <Redirect to="/login" />
        }

        return(
            <>
            <Navbar myLocation={navbarLocation.profile}/>
            <div id="profilePage" >
				<div id="userInfo">
					<img src={logo} id="profilePic" alt="user-profile-pic"/>
					<h2 id="username_header"> {this.state.username} </h2>
					<hr size="3"/>
					<p id="patient_email"> < AiOutlineMail/> {this.state.email} </p>
				</div>
				<div>
		       		<p id="yourapp">Scheduled Appointments:</p><br/><br/>
		           
		           <div id="user_appointments">	{ this.renderItems()} </div>
			</div> 
               
            </div>
            </>
        );
    }
}
