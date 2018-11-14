import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Checkout from "./components/checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="container">
            <Redirect to={"/checkout/6544"} />
            <Route exact path="/checkout/:id" component={Checkout} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
