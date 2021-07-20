import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Profile from '../pages/profile';

export default class DoctorEntry extends Component {

    onClick(e){
        <Profile key={this.props.name}/>
    }

    render() {
        const {name, city, rating} = this.props;

        var stars = "*".repeat(rating);


        return (
            <div className="col-4">
                <Card>
                    <CardBody>
                        <a href='/profile' onClick={this.onClick}> <h3>Name: {name}</h3></a>
                        <CardText>City: {city}</CardText>
                        <CardText>Rating: {stars}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}