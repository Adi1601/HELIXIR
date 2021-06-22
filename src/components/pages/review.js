import React, {Component} from 'react';
import Navbar from '../Navbar';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';

import "./tele-eval.css";
import "./review.css"

export default class Review extends Component{constructor() {
    //acess and call functions on an object's parent
    super(); 

    this.state = {
      rating: "",
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

    console.log("The feedback was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
        <>
        <Navbar/>
        
        <div className= "evalCenter">
            <h2>How was your experience?</h2>

                <form onSubmit={this.handleSubmit}>
                    
                    <div className="evalFields">
                      <div className="doctorPhoto"/>
                      <div className="rating">
                        <label className= "text" htmlFor="comment">
                            Comment 
                        </label>
                        <br/> <br/>

                        <input
                            type="comment"
                            id="comment"
                            className="reviewInput"
                            placeholder=""
                            value={this.state.oxygen}
                            onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="evalFields">
                        <ButtonWrapper>
                            <Button to = "/tele">
                                    Submit
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button to = "/tele">
                                Skip
                            </Button>
                        </ButtonWrapper>
                    </div>
                </form>
            </div>
        </>
    );
  
  }

}