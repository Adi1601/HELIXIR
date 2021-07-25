import React, {Component} from 'react';
import Navbar, { navbarLocation } from '../Navbar';
import DoctorEntry from '../Search/DoctorEntry';
import axios from 'axios';
import './css/search.css';

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

        console.log("searching for first load:", search);
        
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

    componentDidUpdate () {
        console.log("sort Enable ");
        console.log(this.state.sortEnable);
        if (this.state.sortEnable) {
            console.log("updating");
            console.log(this.state.sortType);
            this.setState({sortEnable : false});
            this.sortDoctors(this.state.sortType);
            console.log("Kartikay printing doctors");
            console.log(this.state.doctors);
        }
    }

    sortDoctors (type) {
        const types = {
            alphabet : 'name',
            rating : 'avg_rating',
        };
        var sortProperty = types[type];
        if (sortProperty === 'avg_rating') {
            var sorted = [...this.state.doctors].sort((a, b) => b[sortProperty] - a[sortProperty]);
        } else {
            var sorted = [...this.state.doctors].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
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
            if (doctors.length) console.log('got something');
            console.log(doctor._id);
            return <DoctorEntry key={doctor._id}{...doctor}/>
        });

        return(
            <>
            <Navbar myLocation={navbarLocation.search}/>
            <div className="searchPage">
                <div className="searchBox">
                    <h3 ><b>Filters</b></h3>
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
                    {/* <div className="resultAnnounce">
                    Results: {this.state.searchName}
                    </div> */}
                    <select onChange={this.setSortType}>
                        <option value="alphabet">Doctor's Name A-Z</option>
                        <option value="rating">Rating High-Low</option>
                    </select>
                    <div className="doctorCards">
                        {DoctorEntries}
                    </div>
                </div>
            </div>
            </>
        );
    }
}