import React, {Component} from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';

import { FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import "./review.css"
import "./profile.css"
import "./feedback.css"
//import { Button } from 'react-scroll';


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