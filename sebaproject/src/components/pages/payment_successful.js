import React, {Component} from 'react';
import Navbar from '../Navbar';
import "./payment_successful.css";
import success_icon from './success_icon.png';
import Button from 'react-bootstrap/Button';
import PatientView from './patient-view';
import { Redirect } from 'react-router-dom';


export default class PaymentSuccessful extends Component{
  constructor(props) {
  	super(props);  
  } 
  

    render() {


        return(
            <>
            <Navbar/>
            <div  id="all" class="container h-100" >
				
				<div className="image-container">
					<img src={success_icon} id="success_icon"  height={198} width={211}  /> 
				</div> <br/><br/>
           		<a id="succ"> Payment Successful!</a><br/><br/><br/>
           		
           		<Button variant="outline-secondary" onClick={() => this.props.history.push('/homep')}>Back to profile page</Button>
           		
         
            </div>
            </>
        );
    }
}
