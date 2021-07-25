//This is the component for the payment successful page

import React, {Component} from 'react';
import Navbar from '../Navbar';
import "./css/payment_successful.css";
import success_icon from '../../images/success_icon.png';
import Button from 'react-bootstrap/Button';


export default class PaymentSuccessful extends Component{

    render() {

        return(
            <>
            <Navbar/>
            <div  id="all" class="container h-100" >
				
				<div className="image-container">
					<img src={success_icon} id="success_icon"  height={198} width={211}  alt="Payment Successful"  /> 
				</div> <br/><br/>
           		<p id="succ"> Payment Successful!</p><br/><br/><br/>
           		
           		<Button variant="outline-secondary" onClick={() => this.props.history.push('/homep')}>Back to profile page</Button>
           		
         
            </div>
            </>
        );
    }
}
