import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Home from './components/Home';
import Details from './components/Details';
import Locations from './components/Locations';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          B n'B 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <Navigationbar/>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Details" component={Details} />
          <Route exact path="/Locations" component={Locations} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;