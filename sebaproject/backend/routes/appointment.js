//This route is used for use case 2: booking appointments
const router = require('express').Router();
let Appointment =  require('../models/appointment.model');
const jwt = require('jsonwebtoken');

const {
    authorizeToken
} = require('./security/authorization_token.js');

//get localhost:5000/appointment
router.route('/').get(authorizeToken, (req,res)=> {
	Appointment.find()
    	.then(appointments => res.json(appointments))
    	.catch(err => res.status(400).json('Error: ' + err));  	
});

//get localhost:5000/appointment/:username
router.route('/:username').get(authorizeToken, (req,res)=> {
	let result = Appointment.find({name: req.body.username})
    	.then(
			user_appointments => res.json(user_appointments))
		.catch(err => res.status(400).json('Error: ' + err)); 
		console.log(res.json(user_appointments));

		
});

//post localhost:5000/appointment/appointmentCreate
router.route('/appointmentCreate').post(authorizeToken, (req,res) => {
    // Creates a new record from a submitted form
    var newappointment = new Appointment({
		name: req.body.name,
		email: req.body.email,
		doctor_name: req.body.doctor_name,
		doctor_speciality: req.body.doctor_speciality,
		doctor_id: req.body.doctor_id,
		date: req.body.date,
		start_time: req.body.start_time,
		motive: req.body.motive
    });

    // and saves the record to the data base
    newappointment.save()//mongoose method and returns a then/catch
    	.then(() => res.json('New appointment created!'))//what is returned on the screen
    	.catch(err => res.status(400).json('Error: ' + err));//cath error if there process doesnt work
});

//Delete an appointment
//delete localhost:5000/appointment/_id
router.route('/:id').delete(authorizeToken, (req, res) => { 
  Appointment.findByIdAndDelete(req.params.id) //mongoose method and returns a then/catch
      .then(appointment => res.json(appointment +  'was deleted!'))  //what is returned on the screen
      .catch(err => res.status(400).json('Error: ' + err));//cath error if there process doesnt work
});

module.exports = router;
