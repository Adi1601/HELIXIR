import React, {Component} from 'react';
import Navbar from '../Navbar';
import Rating from '@material-ui/lab/Rating';
//import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
//import {Button} from '../ButtonElements';
import axios from 'axios';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';

import "./review.css"
import "./profile.css"


export default class Profile extends Component{
  constructor (props) {
    super (props);

    this.state = {
      name : '',
      city : '',
      rating : ''
    }
  }
  
  /*fetchUserDetails=(user_id)=>{
    //console.log(user_id);
    axios.get("http://localhost:5000/userapi/getUserDetails/"+user_id,{
        headers: {
            "content-type": "application/json"
          }
    }).then(res=>{
        console.log(res);
        this.setState({email:res.data.results[0].email});
        this.setState({profileImage:res.data.results[0].profileImage})
    })
    .catch(err=>console.log(err))
}*/

  render() {

    const {name, city, rating} = this.props.location.state.data;

    return (
        <>
        <Navbar/>
            
            <div className="profilePage">
              <div className="doctorSide">
                <div className="image-cropper">
                  <img src= 'data:image/jpeg;base64,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' class="rounded"/>
                </div>
                <br></br>
                <div className="rating"> 
                    <Rating name="read-only" value={rating} readOnly />
                    <p>City: {city}</p>

                </div>
              </div>

              <div className="doctorProfileInfo">
                  <h2>I'm Dr. {name} </h2>
                  
              </div>
            </div>
               
        
        </>
    );
  
  }

}