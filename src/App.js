import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/index';
import Tele from './components/pages/tele';

function App() {
  return (
    <Router>
    <Switch>
      <Route path = "/" exact component={Home}/>
    </Switch>
    <Switch>
      <Route path = "/tele" exact component={Tele}/>
    </Switch>
    </Router>
  );
}

export default App;
