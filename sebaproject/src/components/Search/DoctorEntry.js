import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class DoctorEntry extends Component {
    render() {
        const {name, city, rating} = this.props;

        var stars = "*".repeat(rating);

        return (
            <div className="col-4">
                <Card>
                    <CardBody>
                        <h3>Name: {name}</h3>
                        <CardText>City: {city}</CardText>
                        <CardText>Rating: {stars}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}