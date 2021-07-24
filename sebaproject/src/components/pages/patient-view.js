import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

import "./patientview.css";

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

				this.setState({username : userJ.username});     
				this.setState({email : userJ.email});
				
				//I've tryed to put ${this.state.username}, but setState() is asynchronous, so I can't control when it actually updates the username, so the axios gets nothing as req.params because username is empty
				axios.get(`http://localhost:5000/appointment/${userJ.username}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
					},
				})
				  .then(res => {
					this.setState({ user_appointments: res.data})
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
	    	<div id="patient_view_card" ><Card border="primary" className="text-left">
				    <Card.Body>
						<Card.Title> For doctor {item.doctor_name} </Card.Title>
						 <Card.Text>
						 	  Doctor's speciality: {item.doctor_speciality}<br/>
						 	  Motive: {item.motive}<br/>
							  Date: {item.date.split('T')[0]}<br/>
							  Time: { item.start_time}:00
	  	 
						  </Card.Text>
				     
				    </Card.Body>

			</Card><br/></div>)
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
            <Navbar/>
            <div class="container h-100" >
            	<br/><br/>
		        <h2 id="username_header"> {this.state.username} </h2><br/><hr size="6"  />
		       	<a id="patient_email"> Email:  {this.state.email} </a><br/><br/>
		       	<a id="yourapp">Appointments:</a><br/><br/>
		           
		           <div id="user_appointments">	{ this.renderItems()} </div><br/>
		           
               
            </div>
            </>
        );
    }
}
