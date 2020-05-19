import React from "react";

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
        <nav className="product-nav">
          <ul>
            <li className="product-sub-menu" onClick={() => this.isSelected(1)}>
              <a href="#">
                屏風<div className="fa fa-caret-down right"></div>
              </a>
              <ul className={`collapsible ${
                  this.state.active === 1 ? "open" : null
                }`}>
                <li>
                  <a href="#">2.5cm屏風</a>
                </li>
                <li>
                  <a href="#">桌上屏風</a>
                </li>
              </ul>
            </li>
            <li className="product-sub-menu" onClick={() => this.isSelected(2)}>
              <a href="#">
                椅子系列<div className="fa fa-caret-down right"></div>
              </a>
              <ul className={`collapsible ${
                  this.state.active === 2 ? "open" : null
                }`}>
                <li>
                  <a href="#">折合椅</a>
                </li>
                <li>
                  <a href="#">排椅</a>
                </li>
              </ul>
            </li>
            <li className="product-sub-menu" onClick={() => this.isSelected(3)}>
              <a href="#">
                桌子系列<div className="fa fa-caret-down right"></div>
              </a>
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
      </React.Fragment>
    );
  }
}

export default Product;
