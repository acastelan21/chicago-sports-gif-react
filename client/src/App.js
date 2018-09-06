import React, { Component } from 'react';
import './App.css';
import {Router, Route} from "react-router-dom";
import Wrapper from"./components/Wrapper";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bears from "./pages/Bears";
import Blackhawks from "./pages/Blackhawks";
import Cubs from "./pages/Cubs";
import WhiteSox from "./pages/WhiteSox";
import ContactUs from "./pages/ContactUs";
import history from "./history";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <Wrapper>
        
        {/* Routing for Pages */}
        <Router history={history}>
          <div>
            <NavBar/>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/bears" component={Bears}/>
            <Route exact path="/blackhawks" component={Blackhawks}/>
            <Route exact path="/cubs" component={Cubs}/>
            <Route exact path="/white-sox" component={WhiteSox}/>
            <Route path="/contact-us" component={ContactUs}/>
            <Footer/>
          </div>

        </Router>



        
      </Wrapper>
    );
  }
}

export default App;
