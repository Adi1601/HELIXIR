import React, {Component} from 'react';
import Navbar from '../Navbar';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import "./css/appointment.css";
import "./css/tele-eval.css";
import "./css/review.css"


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
    })

    window.location.href='/homep';

  }


  render() {
    return (
        <>
        <Navbar/>
        
        <div className= "evalCenter">
            <h2>How was your experience with Dr. {this.state.doc}?</h2>

                <form onSubmit={this.onSubmit}>
                    
                    <div className="evalFields">
                      <div className="rating">
                        <Rating
                          name="simple-controlled"
                          value={this.rating}
                          onChange={this.onChangeRating}
                          id="starRating"

                        />
                        <div>
                          <label className= "evalFieldLabelDescription" htmlFor="comment">
                              Comment
                          </label>
                          <br/>
                          <textarea rows="5" cols="50" name="text" placeholder="Enter text" value={this.comment}
                              onChange={this.onChangeComment}></textarea>
              
                        </div>
                        <p id= "footNote"> Reach out to us at help@helixir.de, if you had any issues during your appointment, or for any feedback. We'd be happy to help! </p>
                      </div>
                    </div>

                    <div id="buttonSection">
                          <a href="/homep" id="backButton"> Skip</a>
                          <Button  id="buttonProceed" variant="primary" type="submit" onClick={this.onSubmit} > Submit </Button>
									        
                    </div>
                </form>
            </div>
        </>
    );
  
  }

}