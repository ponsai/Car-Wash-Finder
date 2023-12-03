import './App.css';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Locations from './components/Locations';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigationbar/>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Details" component={Details} />
            <Route exact path="/Locations" component={Locations} />
            <Route exact path="/About" component={About} />
          </Switch>
          </Router>
          <Footer/>
    </div>
  );
}

export default App;
