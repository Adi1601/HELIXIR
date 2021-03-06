import React from "react";
import ReactDOM from "react-dom"
import Navbar from "../Navbar";
import "./css/payments.css";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const payments = () =>{
    const createOrder = (data, actions) =>{
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "3"
            },
          },
        ],
      });
    };
  
    const onApprove = (data, actions) => {
      return (actions.order.capture(),
      window.location.href='/success'
      );
    };
  
    return (
      <>
      <Navbar/>
      <div className="paymentarea">
        <h2>Pay and Confirm your appointment!</h2>
        <h3>Convenience Fee: 3€</h3>
        <div className="wrapper">
          <p>Choose your payment method!</p>
          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      </div>
      </>
    );
  }

  export default payments;
