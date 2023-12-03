import './App.css';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Locations from './components/Locations';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <NavigationBar/>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Details" component={Details} />
            <Route exact path="/Locations" component={Locations} />
            <Route exact path="/About" component={About} />
          </Switch>
          <Footer/>
          </Router>
    </div>
  );
}

export default App;
