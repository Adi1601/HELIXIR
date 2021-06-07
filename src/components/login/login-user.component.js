import React, {Component} from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';

export default class LoginUser extends Component{constructor() {
    //acess and call functions on an object's parent
    super(); 

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
        <>
        <Navbar/>
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
            <div>
                <label className="formFieldLabel" htmlFor="email">
                    E-Mail Address
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="formFieldInput"
                    placeholder="Enter your email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
            </div>
            <br/>
            <div>
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <ButtonWrapper>
                <Button to="signup" >
                        Login
                    </Button>
            </ButtonWrapper>
          </div>

        
        </form>
      </div>
      </>
    );
  
}

    /*render(){
    return(
        <>
        <Navbar/>
        <div>
            <p> You are on the Login page</p>
        </div>
        </>
    );
    }*/
}