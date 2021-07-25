import React, {Component} from 'react';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';

import "./css/tele-eval.css";


export default class TeleEvalForm extends Component{
    constructor() {
    
    //acess and call functions on an object's parent
    super(); 

    this.state = {
        age: "",
        temperature: "",
        pulse_rate: "",
        blood_presure: "",
        oxygen: "",
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
        <div className= "evalCenter">
            <h2>Self-Evaluation</h2>

                <form onSubmit={this.handleSubmit}>
                    <div> 
                        <label htmlFor="age">
                            Age <br/>
                        <p className=" evalFieldLabelDescription"> Enter your age in completed years</p>
                            </label>
                            <br/>
                                    
                            <input
                            type="number"
                            id="age"
                            name="age"
                            min="0" 
                            max="120"
                            value={this.state.age}
                            onChange={this.handleChange}
                            />
                    </div>
                        <div >
                        <label htmlFor="temperature">
                            Temperature (ºC)<br/>
                        <p className=" evalFieldLabelDescription"> Use the thermometer and enter the reading </p>
                        </label>
                        <br/>
                        <input
                            type="number"
                            id="temperature"
                            maxlength="2"
                            name="temperature"
                            value={this.state.temperature}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label  htmlFor="pulse_rate">
                            Pulse Rate (bpm)<br/>
                        <p className=" evalFieldLabelDescription"> Use the heart rate moniter device or count your pulse for 15 seconds and multiply that number by 4</p>
                        </label>
                        <br/>
                        <input
                            type="number"
                            id="pulse_rate"
                            name="pulse_rate"
                            value={this.state.pulse_rate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div >
                    <label htmlFor="blood_pressure">
                        Blood Pressure (mmHg) <br/>
                        <p className=" evalFieldLabelDescription"> Enter the reading from the digital sphygmomanometer</p>
                    </label>
                    <br/>
                    <input
                        type="number"
                        id="blood_pressure"
                        name="blood_pressure"
                        value={this.state.blood_pressure}
                        onChange={this.handleChange}
                    />
                    </div>

                    <div >
                    <label  htmlFor="oxygen">
                        Oxygen Saturation (%)<br/>
                        <p className=" evalFieldLabelDescription"> Enter reading from the pulse oxymeter </p>
                    </label>
                    <br/>
                    <input
                        type="number"
                        id="oxygen"
                        value={this.state.oxygen}
                        onChange={this.handleChange}
                    />
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
