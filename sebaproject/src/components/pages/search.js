import React, {Component} from 'react';
import Navbar from '../Navbar';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import DoctorEntry from '../Search/DoctorEntry';
import axios from 'axios';

export default class SearchDoctor extends Component{
    constructor(props) {
      super(props);

        this.state = {
            doctors: [],
            searchtext: '',
            name: '',
            city: '',
            rating: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this); 
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onSubmitDoc = this.onSubmitDoc.bind(this);
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeCity(e){
        this.setState({
            city: e.target.value
        })
    }

    onChangeRating(e){
        this.setState({
            rating: e.target.value
        })
    }

    onSubmitDoc (e) {
        e.preventDefault();

        const doctorData = {
            name: this.state.name,
            city: this.state.city,
            rating: this.state.rating,
          }
      
          console.log(doctorData);
      
          axios.post('http://localhost:5000/doctors/add', doctorData)
          .then( (res) => {
            console.log(res.data);
          })
          .catch((error) => {alert(error.message)});
      
          this.setState({
            name: '',
            city: '',
            rating: ''
          })
    }

    onChangeSearch (e) {
        this.setState({
            searchtext: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const search = {
            text: this.state.searchtext,
        }

        console.log("searching for:", search);
        
        axios.post('http://localhost:5000/doctors/search', search)
        .then( (res) => {
            const docs = res.data.doctor;
            for(let i=0; i<docs.length; i++) {
                console.log("doctors rec: " + docs[i].name);
            }
            this.setState({ doctors: docs})
            console.log(this.state.doctors);
        })
        .catch(function(err) {
            console.log("Rec Err: " + err.response);
        });
    }

    render() {
        const doctors = this.state.doctors;
        const len = doctors.length;

        console.log("Printing doctors list");
        console.log(doctors);

        const DoctorEntries = doctors.map((doctor, index) => {
            if (doctor.length) console.log('got something');
            return <DoctorEntry key={doctor.id}{...doctor}/>
        });

        return(
            <>
            <Navbar/>
            <div>
                <div>
                    <form onSubmit={this.onSubmitDoc}>
                        <div>
                            <label>Name:</label>
                            <input value={this.state.name} onChange={this.onChangeName}/>
                        </div>
                        <div>
                            <label>City:</label>
                            <input value={this.state.city} onChange={this.onChangeCity}/>
                        </div>
                        <div>
                            <label>Rating:</label>
                            <input value={this.state.rating} onChange={this.onChangeRating}/>
                        </div>
                        <ButtonWrapper>
                          <Button onClick={this.onSubmitDoc}>
                              Add
                          </Button>
                      </ButtonWrapper>
                    </form>
                </div>
                <h2>This is doctor search</h2>
                <div>
                    <form onSubmit={this.onSubmit}>
                        
                            <input id="search-bar" value={this.state.searchtext} onChange={this.onChangeSearch}/>
                            <Button  onClick={this.onSubmit}>Search</Button>
                        
                    </form>
                </div>
                <div>
                    Showing results for:
                    <input placeholder={this.state.searchtext} onChange={this.onChangeSearch}/>
                </div>
                <div>
                    <div class="container">
                        <div class="row">
                            {DoctorEntries}
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}