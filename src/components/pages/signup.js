import React, {Component} from 'react';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import "./login-user.css";
import "./signup.css";
import axios from 'axios';

export default class SignUpUser extends Component{
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      password: ''
    }
}

onChangeUsername(e){
    this.setState({
        username: e.target.value
    })
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

onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
    password: this.state.password,
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      email: '',
      password: ''
    })
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
                  <form className="formFields" onSubmit={this.onSubmit} >
                      <div>
                          <label className="formFieldLabel" htmlFor="text">
                              Name
                              </label>
                              <input
                              type="text"
                              id="username"
                              required
                              className="formFieldInput"
                              placeholder="Enter your Name"
                              name="username"
                              value={this.state.username}
                              onChange={this.onChangeUsername}
                              />
                      </div>
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
                              Sign up
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