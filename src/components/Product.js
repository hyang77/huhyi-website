import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Screenseries from "./Screenseries";
import Chairseries from "./Chairseries";
import Deskseries from "./Deskseries";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
    this.isSelected = this.isSelected.bind(this);
  }

  isSelected(number) {
    this.setState({ active: number });
    console.log(this.state.active);
  }

  render() {
    return (
      <React.Fragment>
        <div className="product-page-container">
          <div className="product-page-boxes">
            <nav className="product-nav">
              <ul>
                <li
                  className="product-sub-menu"
                  onClick={() => this.isSelected(1)}
                >
                  <NavLink to="/product/screens">
                    屏風 Screens<div className="fa fa-caret-down right"></div>
                  </NavLink>
                  <ul
                    className={`collapsible ${
                      this.state.active === 1 ? "open" : null
                    }`}
                  >
                    <li>
                      <a href="#">2.5cm屏風</a>
                    </li>
                    <li>
                      <a href="#">桌上屏風</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="product-sub-menu"
                  onClick={() => this.isSelected(2)}
                >
                  <NavLink to="/product/chairs">
                    椅子系列 Chairs<div className="fa fa-caret-down right"></div>
                  </NavLink>
                  <ul
                    className={`collapsible ${
                      this.state.active === 2 ? "open" : null
                    }`}
                  >
                    <li>
                      <a href="#">折合椅</a>
                    </li>
                    <li>
                      <a href="#">排椅</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="product-sub-menu"
                  onClick={() => this.isSelected(3)}
                >
                  <NavLink to="/product/desks">
                    桌子系列 Desks<div className="fa fa-caret-down right"></div>
                  </NavLink>
                  <ul
                    className={`collapsible ${
                      this.state.active === 3 ? "open" : null
                    }`}
                  >
                    <li>
                      <a href="#">主管桌</a>
                    </li>
                    <li>
                      <a href="#">會議桌</a>
                    </li>
                    <li>
                      <a href="#">辦公桌</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">工作站</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="product-page-boxes">
            <Switch>
              <Route path="/product/screens">
                <Screenseries />
              </Route>
              <Route path="/product/chairs">
                <Chairseries />
              </Route>
              <Route path="/product/desks">
                <Deskseries />
              </Route>
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
