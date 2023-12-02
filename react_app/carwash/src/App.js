import './App.css';
import Navigationbar from './components/Navigationbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Locations from './components/Locations';
import About from './components/About';
import Login from './components/Login';
import ReviewForm from './components/ReviewForm';
import Header from "./components/review/Header";
import Footer from "./components/review/Footer";

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Navigationbar/>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Details" component={Details} />
            <Route exact path="/Locations" component={Locations} />
            <Route exact path="/About" component={About} />
            <Route exact path="/ReviewForm" component={ReviewForm} />
          </Switch>
          </Router>
        <Footer/>
    </div>
  );
}

export default App;
