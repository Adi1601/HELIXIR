import React, {Component} from 'react';
import Navbar from '../Navbar';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';


import "./tele-eval.css";
import "./review.css"

export default class Review extends Component{
  
  constructor(props) {
    //acess and call functions on an object's parent
    super(props); 

    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      rating: "",
      comment: "",
      id_doc: window.localStorage["doctor_id"],
      doc: window.localStorage["doctor"]

    };

  }

  onChangeRating(e){
    this.setState({
        rating: e.target.value
    })
  }

  onChangeComment(e){
    this.setState({
        comment: e.target.value
    })
  }


  onSubmit(event) {
    event.preventDefault();

    console.log("The feedback was submitted with the following data:");
    console.log(this.state);


    const review = {
      rating: this.state.rating,
      comment: this.state.comment,
      id_doc: this.state.id_doc,
    }

    axios.post('http://localhost:5000/review/add', review)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));


    this.setState({
      rating: '',
      comment: '',
      id_doc:0,
    })

  }


  render() {
    return (
        <>
        <Navbar/>
        
        <div className= "evalCenter">
            <h2>How was your experience with Dr. {this.state.doc}?</h2>

                <form onSubmit={this.onSubmit}>
                    
                    <div className="evalFields">
                      <div className="doctorPhoto"/>
                      <div className="rating">
                        <Rating
                          name="simple-controlled"
                          value={this.rating}
                          onChange={this.onChangeRating}
                        />
                        <div>
                          <label className= "text" htmlFor="comment">
                              Comment
                          </label>
                          <br/> <br/>

                          <input
                              type="comment"
                              id="comment"
                              className="reviewInput"
                              placeholder=""
                              value={this.comment}
                              onChange={this.onChangeComment}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="evalFields">
                        <ButtonWrapper>
                            <Button onClick={this.onSubmit}>
                                    Submit
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button to = "/">
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