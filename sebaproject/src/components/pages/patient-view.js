import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';

import "./patientview.css";

let token = window.localStorage["jwtToken"];

export default class PatientView extends Component{
  constructor() {
    //acess and call functions on an object's parent
    super();
  }
  

    render() {
        if (!token) {
            return <Redirect to="/login" />
        }

        return(
            <>
            <Navbar/>
            <div>
                <h2> patient view </h2>
                <h3> click on teleconsultation </h3>
            </div>
            </>
        );
    }
}
