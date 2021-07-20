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
            searchName: '',
            searchCity: '',
            searchSpec: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearchName = this.onSearchName.bind(this); 
        this.onSearchCity = this.onSearchCity.bind(this);
        this.onSearchSpec = this.onSearchSpec.bind(this);
        
    }

    

    onSearchName (e) {
        this.setState({
            searchName: e.target.value
        })
    }

    onSearchCity (e) {
        this.setState({
            searchCity: e.target.value
        })
    }

    onSearchSpec (e) {
        this.setState({
            searchSpec: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const search = {
            sname: this.state.searchName,
            scity: this.state.searchCity,
            sspec: this.state.searchSpec,
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
                
                <h2>This is doctor search</h2>
                <div>
                    <form onSubmit={this.onSubmit}>
                        
                            <input placeholder={"Enter Name"} id="search-name-bar" value={this.state.searchName} onChange={this.onSearchName}/>
                            <input placeholder={"Enter City"} id="search-city-bar" value={this.state.searchCity} onChange={this.onSearchCity}/>
                            <input placeholder={"Enter Spec"} id="search-spec-bar" value={this.state.searchSpec} onChange={this.onSearchSpec}/>
                            <Button  onClick={this.onSubmit}>Search</Button>
                        
                    </form>
                </div>
                <div>
                    Showing results for:
                    <input placeholder={this.state.searchName} /*onChange={this.onChnage}*//>
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