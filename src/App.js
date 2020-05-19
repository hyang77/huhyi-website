import React from "react";
import "./App.css";
import logo from "./assets/images/logo.jpg";

import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <ScrollToTop>
          <div className="App">
            <header>
              <div className="nav-container">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="companyName">
                  <span>互怡企業</span><span>HUH-YI Enterprise Co.,Ltd</span>
                </div>
                
                <nav className="nav-flex">
                  <label id=""htmlFor="toggle">&#9776;</label>
                  <input type="checkbox" id="toggle" />
                  <ul id="menu">
                    <li className="menu-list">
                      <NavLink to="/">
                        <span>關於互怡</span>
                        <span>About us</span>
                      </NavLink>
                    </li >
                    <li className="menu-list">
                      <NavLink to="/product">
                        <span>產品型錄</span>
                        <span>Products</span>
                      </NavLink>
                    </li>
                    <li className="menu-list">
                      <NavLink to="/contact">
                        <span>聯絡我們</span>
                        <span>Contact us</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <input id="search" type="text" placeholder="Search.."></input>
                
              </div>
            </header>
            <Switch>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              >
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
          </ScrollToTop>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
