import React, {Component} from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import "./login-user.css";
import "./signup.css";
import axios from 'axios';

export default class SignUpUser extends Component{
  constructor() {
    //acess and call functions on an object's parent
    super(); 

    this.state = {
      name:"",
      email: "",
      password: "",
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
    //prevents normal html form behavior
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }

    console.log("The form was submitted with the following data:");
    console.log(user);

  
    axios.post('http://localhost:8000/users/add', user)
     .then(res => console.log(res.data));

    this.setState({
      name:'',
      email:'',
      password: '',
    })
    //window.location = '/';
  }

  render() {
    return (
        <>
        <Navbar/>
        <div className="loginPage">
            <div className="signupAside"/>
            <div className = "loginForm">
              <div className="transbox">
                <div className="formCenter">
                  <form className="formFields" >
                      <div>
                          <label className="formFieldLabel" htmlFor="text">
                              Name
                              </label>
                              <input
                              type="text"
                              id="name"
                              className="formFieldInput"
                              placeholder="Enter your Name"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              />
                      </div>
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

                      <ButtonWrapper>
                          <Button onClick= {this.handleSubmit}>
                              Sign Up
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