import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/index';
import LoginUser from './components/pages/login-user.component';
import React from 'react';
import "@fontsource/roboto/" ;

/*import "bootstrap/dist/css/bootstrap.min.css"*/
import Tele from './Tele';
import TeleEval from './components/pages/tele-eval';
import Review from './components/pages/review';
import Signup from './components/pages/signup';
import Profile from './components/pages/profile';
import PatientView from './components/pages/patient-view';
import SearchDoctor from './components/pages/search';
import Success from './components/pages/payment_successful';
<<<<<<< HEAD
=======

>>>>>>> 7f163ef20dd44658df101065474074af7e5377a3
import 'bootstrap/dist/css/bootstrap.min.css';//CSS framework for front-end formatting

import Appointment from './components/pages/appointment';//import the appointment component
import payments from './components/pages/payments';

function App() {
  return (
    <Router>
    
    
     <Switch>    
          <Route path="/appointment" exact component = {Appointment}/>
      </Switch>
      <Switch>
          <Route path="/" exact component = {Home}/>
      </Switch>
      <Switch>
          <Route path="/login" exact component = {LoginUser}/>
      </Switch>
      <Switch>
      <Route path = "/tele" exact component={Tele}/>
      </Switch>
      <Switch>
      <Route path = "/tele/form" exact component={TeleEval}/>
      </Switch>
      <Switch>
      <Route path = "/signup" exact component={Signup}/>
      </Switch>
      <Switch>
      <Route path = "/tele/review" exact component={Review}/>
      </Switch>
      <Switch>
      <Route path = "/profile" exact component={Profile}/>
      </Switch>
      <Switch>
      <Route path = "/homep" exact component={PatientView}/>
      </Switch>
      <Switch>
        <Route path = "/search" exact component={SearchDoctor}/>
      </Switch>
      <Switch>
        <Route path = "/success" exact component={Success}/>
      </Switch>
      <Switch>
        <Route path = "/payment" exact component={payments}/>
      </Switch>
      <Switch>    
        <Route path="/success" exact component = {Success}/>
      </Switch>
    </Router>
    );

}

export default App;
