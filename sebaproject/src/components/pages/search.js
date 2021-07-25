import React, {Component} from 'react';
import Navbar, { navbarLocation } from '../Navbar';
import DoctorEntry from '../Search/DoctorEntry';
import axios from 'axios';
import './css/search.css';
import {FiFilter} from 'react-icons/fi'

export default class SearchDoctor extends Component{
    constructor(props) {
      super(props);

        this.state = {
            doctors: [],
            searchName: '',
            searchCity: '',
            searchSpec: '',
            sortEnable: false,
            sortType: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearchName = this.onSearchName.bind(this); 
        this.onSearchCity = this.onSearchCity.bind(this);
        this.onSearchSpec = this.onSearchSpec.bind(this);
        this.setSortType = this.setSortType.bind(this);
        
    }

    componentDidMount () {
        const search = {
            sname: this.state.searchName,
            scity: this.state.searchCity,
            sspec: this.state.searchSpec,
        }
        
        axios.post('http://localhost:5000/doctors/search', search)
        .then( (res) => {
            const docs = res.data.doctor;
            this.setState({ doctors: docs})
        })
        .catch(function(err) {
            console.log(err.response);
        });
    }

    componentDidUpdate () {
        if (this.state.sortEnable) {
            this.setState({sortEnable : false});
            this.sortDoctors(this.state.sortType);
        }
    }

    sortDoctors (type) {
        const types = {
            alphabet : 'name',
            rating : 'avg_rating',
        };
        var sortProperty = types[type];
        var sorted;
        if (sortProperty === 'avg_rating') {
            sorted = [...this.state.doctors].sort((a, b) => b[sortProperty] - a[sortProperty]);
        } else {
            sorted = [...this.state.doctors].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
        }
        this.setState({doctors : sorted});
        sorted = [];
    }

    setSortType (e) {
        this.setState({
            sortType : e.target.value,
            sortEnable : true
        })
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
        
        axios.post('http://localhost:5000/doctors/search', search)
        .then( (res) => {
            const docs = res.data.doctor;
            this.setState({ doctors: docs})
        })
        .catch(function(err) {
            console.log("Rec Err: " + err.response);
        });
    }

    render() {
        const doctors = this.state.doctors;
        const DoctorEntries = doctors.map((doctor, index) => {
            return <DoctorEntry key={doctor._id}{...doctor}/>
        });

        return(
            <>
            <Navbar myLocation={navbarLocation.search}/>
            <div className="searchPage">
                <div className="searchBox">
                    <h3 style={{marginLeft: "-100px"}}> <b>Filters</b></h3>
                    <br/>
                    <form className="formSearch" onSubmit={this.onSubmit}>
                        
                        <div className="searchInput">
                            <label><b>Doctor's Name </b></label>
                            <input
                                id="search-name-bar"
                                placeholder="e.g. Müller"
                                value={this.state.searchName}
                                onChange={this.onSearchName}/>
                        </div>
                        <hr className="hrSearch"/>
                        <div className="searchInput">
                            <label><b>City</b></label>
                            <input
                                id="search-city-bar"
                                placeholder="e.g. Munich"
                                value={this.state.searchCity}
                                onChange={this.onSearchCity}/>
                        </div>
                        <hr className="hrSearch"/>
                        <div className="searchInput">
                            <label><b>Speciality</b></label>
                            <input
                                id="search-spec-bar"
                                placeholder="e.g. Cardiology"
                                value={this.state.searchSpec}
                                onChange={this.onSearchSpec}/>
                        </div>

                        <button onClick={this.onSubmit} className="searchButton">
                            Search
                        </button>
                    </form>
                </div>
                <div className="searchResults">
                   
                    <div id = "sortFilter">
                        <FiFilter/>
                        <select onChange={this.setSortType} id="sortFilterBox">
                            <option value="alphabet">Doctor's Name A-Z</option>
                            <option value="rating">Rating High-Low</option>
                        </select>
                    </div>
                    <div className="doctorCards">
                        {DoctorEntries}
                    </div>
                </div>
            </div>
            </>
        );
    }
}