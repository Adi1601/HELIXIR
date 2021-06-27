import React, {Component} from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import "./login-user.css";

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
      <div className="loginPage">
            <div className="loginAside"/>
            <div className = "loginForm">
              <div className="transbox">
                <div className="formCenter">
                  <form className="formFields" onSubmit={this.handleSubmit}>
                      <div>
                          <label className="formFieldLabel" htmlFor="email">
                              E-Mail Address
                              </label>
                              <input
                              type="email"
                              id="email"
                              required
                              className="formFieldInput"
                              placeholder="Enter your email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              />
                      </div>
                      <div>
                      <label className="formFieldLabel" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        required
                        className="formFieldInput"
                        placeholder="Enter your password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>

                      <ButtonWrapper>
                          <Button >
                              Login
                          </Button>
                      </ButtonWrapper>

                  
                  </form>
                </div>
              </div>
          </div>
      </div>
      </>
    );
  
  }

}