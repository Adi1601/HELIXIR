import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/index';
import LoginUser from './components/login/login-user.component';
import Navbar from './components/Navbar/index';
import React from 'react';
/*import "bootstrap/dist/css/bootstrap.min.css"*/

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component = {Home}/>
      </Switch>
      <Switch>    
          <Route path="/login" exact component = {LoginUser}/>
      </Switch>
    </Router>
    );

}

export default App;
