import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Profile from '../pages/profile';

export default withRouter(class DoctorEntry extends Component {

    constructor (props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){

        e.preventDefault();

        const doctorData = {
            name: this.props.name,
            city: this.props.city,
            rating: this.props.rating,
        }

        console.log(doctorData);
        this.props.history.push({pathname: '/profile', state: {data: doctorData}});

    }

    render() {
        const {name, city, rating} = this.props;

        var stars = "*".repeat(rating);


        return (
            <div className="col-4">
                <Card>
                    <CardBody>
                        <a onClick={this.onClick}> <h3>Name: {name}</h3></a>
                        <CardText>City: {city}</CardText>
                        <CardText>Rating: {stars}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
})