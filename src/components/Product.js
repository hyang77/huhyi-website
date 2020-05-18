import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: false};
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {

    this.setState((state) => {
      if (state.visibility === true) {
        return { visibility: false };
      } else {
        return { visibility: true };
      }
    });
    console.log(this.state.visibility);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="product-nav">
          <ul>
            <li  id="list1" className="product-sub-menu" onClick={this.toggleVisibility}>
              <a href="#">
                屏風<div className="fa fa-caret-down right"></div>
              </a>
              <ul
                
                style={
                  this.state.visibility
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <li>
                  <a href="#">2.5cm屏風</a>
                </li>
                <li>
                  <a href="#">桌上屏風</a>
                </li>
              </ul>
            </li>
            <li  id="list1" className="product-sub-menu" onClick={this.toggleVisibility}>
              <a href="#">
                椅子系列<div className="fa fa-caret-down right"></div>
              </a>
              <ul
                
                style={
                  this.state.visibility
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <li>
                  <a href="#">折合椅</a>
                </li>
                <li>
                  <a href="#">排椅</a>
                </li>
              </ul>
            </li>
            <li className="product-sub-menu">
              <a href="#">
                桌子系列<div className="fa fa-caret-down right"></div>
              </a>
              <ul>
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
      </React.Fragment>
    );
  }
}

export default Product;
