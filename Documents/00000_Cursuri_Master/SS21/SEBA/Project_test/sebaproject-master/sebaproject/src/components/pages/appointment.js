import React, { Component, useState, useEffect} from 'react';
import Navbar from '../Navbar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "./appointment.css";
import LoginUser from './login-user.component';


 //Appointment component defined here and rendered when accesing the following from the browser: http://localhost:5001/appointment
 const Appointment = props => {
	
        //Define the variables that will be modified in the front end by the user (date, time and reason for appointment)
        //The constants are defined together with the methods used to change each variable (setDate, setTime and setMotive) since the user will interact with them in the front-end 
        //useState is the method which sets the initial states of each variable
        //newDate() is today's date
		const [date, setDate] = useState(new Date());
		const [time, setTime] = useState(0);
		const [motive, setMotive] = useState("");
		const [isLogged, setIsLogged] = useState(false);
		const [username, setUsername] = useState("");
		const [email, setEmail] = useState("");
		const [doctor_name, setDoctorName] = useState("");


		useEffect(() => {
			if (localStorage.getItem("jwtToken") !== null) {
				setIsLogged(true);
			
			//getting the username and email of the logged user form the token
				let token = localStorage.getItem("jwtToken");
				let base64Url = token.split(".")[1];
    			let base64 = base64Url.replace("-", "+").replace("_", "/");
    			//atob() function decodes a string of data which has been encoded using Base64 encoding.
				let userJ = JSON.parse(window.atob(base64));

				setUsername(userJ.username); 
				setEmail(userJ.email);
				setDoctorName(localStorage.getItem("doctor"));
			} else {
				alert("You have to be logged in to make an appointment!");
			}
		
		});
	
        //Define the function called when clicking the "Proceed" button in the front-end
		const onSubmit = (e) => {
			e.preventDefault();
							
			if (date.getTime() ==  (new Date()).getTime() || time == 0 ) { //if the date and time have their initial states, the user needs to make a choice
				alert("Please choose the date and time for the appointment!");
			} else if (date.getTime() < (new Date()).getTime() ) { //the user cannot choose a date earlier than today's date
				alert("Please choose an appropriate date!");
			} else {
				
				const body = {
					name: username,
					email: email,
					doctor_name: doctor_name,
		   			date : date,
		   			start_time: time,
		   			motive: motive
	   			}
  			
                //use axios to request the backend to create the new appointment
	   			axios.post('http://localhost:5000/appointment/appointmentCreate', body, {
	   					 headers: {
							Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
						},
					})
	   				.then(res => console.log(res.data))
	   				.catch(err => console.error(err));  
					   
				window.location.href='/payment';
			}
			
	}
		//if the user in not logged in, it redirects to the Login page, else it shows the appointment page	
    	return (
    		<div>{
    			isLogged == false? <LoginUser/>:
    			
    				<div> 
						 	<Navbar />  

							<form id="form_appointment">
								<a id="text">	Choose an available date for your appointment with doctor<b> {doctor_name} </b></a><br/><br/>	
										
								<DatePicker  selected={date} onChange={(appointment_date) => setDate(appointment_date)} /> <br/><br/>
								
								<a id="text">	Choose an available time for your appointment with doctor <b> {doctor_name} </b></a> <br/><br/>
								
								<input type="radio" name="appointment_time" onChange={() => setTime(9)} />
								<label id="hours_appointment">09 : 00 - 10 : 00</label><br/>
								
								<input type="radio" name="appointment_time" onChange={() => setTime(10)}/>
								<label id="hours_appointment">10 : 00 - 11 : 00</label><br/>
								
								<input type="radio" name="appointment_time" onChange={() => setTime(11)}/>
								<label id="hours_appointment" >11 : 00 - 12 : 00</label><br/>
								
								<input type="radio" name="appointment_time" onChange={() => setTime(12)}/>
								<label id="hours_appointment" >12 : 00 - 13 : 00</label><br/>
								
								<input type="radio" name="appointment_time" onChange={() => setTime(13)}/>
								<label id="hours_appointment">13 : 00 - 14 : 00</label><br/>
								
								<input type="radio" name="appointment_time" onChange={() => setTime(14)}/>
								<label id="hours_appointment">14 : 00 - 15 : 00</label><br/>
								
								<input type="radio" name="appointment_time" onChange={() => setTime(15)}/>
								<label id="hours_appointment">15 : 00 - 16 : 00</label><br/>
								
								<input type="radio" name="appointment_time" onChange={() => setTime(16)}/>
								<label id="hours_appointment">16 : 00 - 17 : 00</label><br/><br/>
								
								<label id="text">Motive for appointment( optional)</label><br/>
								
								<input type="text" id="textbox" placeholder="Motive" value={motive} onChange={(e) => setMotive(e.target.value)}/><br/><br/>
										
								<Button  variant="primary" type="submit" onClick={(e) => onSubmit(e)} > Proceed </Button>
								<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
									
							</form>
							
    				</div> 
					 } 
    		</div>
    	)
 
 }
 
export default Appointment;


/*


<div class="container h-100"> 
							<a id="text"> You have to be logged in to make an appointment  </a><br/><br/>
							<Button  variant="primary" type="submit" onClick={(e) =>  window.location.href='/login'} > Login </Button>  <br/>
							<a id="text"> Don't have an account? </a><br/><br/>
							  		
							<Button  variant="primary" type="submit" onClick={(e) =>  window.location.href='/signup'} > SignUp </Button>   
					
					 	</div>
					 	
					 	
*/
