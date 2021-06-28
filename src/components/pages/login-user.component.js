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

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e){
    this.setState({
        email: e.target.value
    })
}

  onChangePassword(e){
      this.setState({
          password: e.target.value
      })
  }

  onSubmit(event) {
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
                              onChange={this.onChangeEmail}
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
                        onChange={this.onChangePassword}
                      />
                    </div>

                      <ButtonWrapper>
                          <Button onClick={this.onSubmit}>
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