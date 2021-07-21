import React, {Component} from 'react';
import Navbar from '../Navbar';
import {ButtonWrapper} from '../WelcomeSection/WelcomeElements';
import {Button} from '../ButtonElements';
import DoctorEntry from '../Search/DoctorEntry';
import axios from 'axios';
import {Container} from '@material-ui/core';
import './search.css';

export default class SearchDoctor extends Component{
    constructor(props) {
      super(props);

        this.state = {
            doctors: [],
            searchName: '',
            searchCity: '',
            searchSpec: '',
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
            console.log(doctor['_id'].str);
            return <DoctorEntry key={doctor.id}{...doctor}/>
        });

        return(
            <>
            <Navbar/>
                <Container>
                    <div className="searchBox">
                        <form className="formSearch" onSubmit={this.onSubmit}>
                            <div className="searchInput">
                                <input placeholder={"Enter Name"}
                                    id="search-name-bar"
                                    value={this.state.searchName}
                                    onChange={this.onSearchName}/>
                            </div>
                            <div className="searchInput">
                                <input placeholder={"Enter City"}
                                    id="search-city-bar"
                                    value={this.state.searchCity}
                                    onChange={this.onSearchCity}/>
                            </div>
                            <div className="searchInput">
                                <input placeholder={"Enter Spec"}
                                    id="search-spec-bar"
                                    value={this.state.searchSpec}
                                    onChange={this.onSearchSpec}/>
                            </div>
                            <div className="buttonPos">
                            <ButtonWrapper>
                                <Button  onClick={this.onSubmit}>Search</Button>
                            </ButtonWrapper>
                            </div>
                            
                        </form>
                    </div>
                </Container>
                <div className="searchResults">
                    <div className="resultAnnounce">
                    Showing results for: {this.state.searchName}
                    </div>
                    <div className="doctorCards">
                        <div class="row">
                            {DoctorEntries}
                        </div>
                    </div>
                </div>


                
            
            </>
        );
    }
}