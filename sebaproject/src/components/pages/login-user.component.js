import React, {Component} from 'react';
import Navbar from '../Navbar';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import "./css/login-user.css";
import axios from 'axios';

let token = window.localStorage["jwtToken"];


export default class LoginUser extends Component{
  constructor(props) {
    //acess and call functions on an object's parent
    super(props); 

    this.state = {
      email: "",
      password: ""
    };

    /* not in state because not updated during render ? */
    this.userJson = {
      usernameR: "",
      emailR: "",
      passwordR: "",
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.extractUser = this.extractUser.bind(this);
  }

  extractUser(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace("-", "+").replace("_", "/");
    let userJ = JSON.parse(window.atob(base64));
    this.userJson.usernameR = userJ.username;
    this.userJson.emailR = userJ.email;
    this.userJson.passwordR = userJ.password;
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

    const loginData = {
      email: this.state.email,
      password: this.state.password,
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.post('http://localhost:5000/users/login', loginData, config)
      .then( (res) => {
        if (res.data.hasOwnProperty("token")) {
          window.localStorage["jwtToken"] = res.data.token;
          this.extractUser(res.data.token);
        }
        window.location.href='/homep';
      })
      .catch((error) => {alert(error.message)});

    this.setState({
      email: '',
      password: ''
    })

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
                  <form className="formFields" onSubmit={this.onSubmit}>
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
                    <br/>
                    <p className="noAccount">
                      Don't have an account? Register <a href="/signup">here</a>
                    </p>
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
