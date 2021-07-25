import React, {Component} from 'react';

import Rating from '@material-ui/lab/Rating';

import { FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import "./css/review.css"
import "./css/profile.css"
import "./css/feedback.css"


export default class Feedback extends Component{
   
  
  render() {
    const {review} = this.props;

    console.log(review);
    return (
      <>
           <blockquote id="reviewCard">
            <Rating name="read-only" value={review.rating} readOnly />
              <p id="reviewComment">
                <FaQuoteLeft id="quoteIconL"/> 
                {review.comment}
                <FaQuoteRight id="quoteIconR"/>
              </p> 
            </blockquote>
      </>
    );
  
  }

}