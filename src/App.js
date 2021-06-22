import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/index';
import LoginUser from './components/pages/login-user.component';
import Navbar from './components/Navbar/index';
import React from 'react';
/*import "bootstrap/dist/css/bootstrap.min.css"*/
import Tele from './components/pages/tele';
import TeleEval from './components/pages/tele-eval';
import SignUpUser from './components/pages/signup';
import Review from './components/pages/review';

function App() {
  return (
    <Router>
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
      <Route path = "/signup" exact component={SignUpUser}/>
      </Switch>
      <Switch>
      <Route path = "/tele/review" exact component={Review}/>
      </Switch>
    </Router>
    );

}

export default App;
