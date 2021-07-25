import React, {Component} from 'react';
import Navbar from '../Navbar';
import Rating from '@material-ui/lab/Rating';
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';
import axios from 'axios';
import Feedback from './feedback'
import { IoIosArrowDropleftCircle} from 'react-icons/io'
import { AiFillMedicineBox} from 'react-icons/ai'
import { FaHospital,FaCity} from 'react-icons/fa'

import "./css/review.css"
import "./css/profile.css"


export default class Profile extends Component{
  constructor (props) {
    super (props);

    this.state = {
      name : '',
      city : '',
      rating : '',
      doc_id : '',
      avgrat : '',
      comments : [],
    }
  }

  componentDidMount() {

    const data = {
      doctor_id : this.props.location.state.data._id,
    }

    axios.post('http://localhost:5000/review/loadprofile', data)
        .then( (res) => {
            this.setState({comments : res.data.review});
            this.setState({avgrat : res.data.rating});
        })
        .catch(function(err) {
            console.log(err.response);
    });

  }

  onBookApp (e) {
        
    //when the "book appointment" button in clicked, the user is redirected to the appointment page
     window.location.href='/appointment';
     window.localStorage["doctor"] = this.props.name;
     window.localStorage["doctor_id"] = this.props._id;
     window.localStorage["doctor_speciality"] = this.props.speciality;
 }


  render() {


    const {name, city, speciality, hospital} = this.props.location.state.data;

    const longreviews = this.state.comments;
    const Comments = longreviews.map((review, index) => {
      return <Feedback review={review}/>
    });

    return (
      <>
        <Navbar/>
        <div id="docProfilePage">
          <a href="search" id="backToSearch"> <IoIosArrowDropleftCircle/> Back </a>
          <div className="profilePageContent">
              <Card id="docCard">
              <CardTitle tag="h3"> <b>I'm Dr. {name}</b></CardTitle>
                <CardBody>
                  <CardText className="text-center">
                    <Rating name="read-only" value={this.state.avgrat} readOnly />
                    <br/><br/>
                    <p><FaCity id="iconsProfile" /> <b>City: </b>{city}</p>
                    <p> <AiFillMedicineBox id="iconsProfile"/> <b>Speciality:</b> {speciality}</p>
                    <p> <FaHospital id="iconsProfile"/> <b>Hospital: </b>{hospital}</p>
                    <br/>
                  </CardText>
                  <button onClick={this.onBookApp} className="appointmentButton">
                      Book Appointment
                  </button>
                </CardBody>
              </Card>
              <div id="commentSection">
                {Comments}
              </div>
          </div> 
        </div>             
      </>
    );
  
  }

}