//This file is used for use case 2: booking appointments and it represents the appointment model

const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

//Schema for the appointment details of the user
const appointmentSchema = new Schema({
    //id: ObjectId - an ID is automatically mande by MongoDB
	name: String,
	email: String,
	doctor_name: String,
	doctor_speciality: String,
	doctor_id: mongoose.ObjectId,
	date: { "type": Date, "default": Date.now() },//gets the current date
	start_time: Number, //it is assumed that it is a number and that each appointment is an hour (so fixed hours)
    motive: String //reason for appointment
});

const Appointment = mongoose.model('Appointment', appointmentSchema);


module.exports = Appointment; // for the database to see the server

