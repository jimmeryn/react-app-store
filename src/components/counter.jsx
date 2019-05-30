import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <tr colSpan="3">
        <th
          style={{
            width: "100%"
          }}
        >
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
            style={{ display: "inline-block" }}
          >
            x
          </button>
          <div style={{ display: "inline-block" }}>
            <h2>{this.getName()}</h2>
            <strong>In stock: </strong>
            <span>{this.getStock()}</span>
          </div>
        </th>
        <th>
          <strong
            style={{
              color: "red",
              fontSize: "12px"
            }}
          >{`USD ${this.getFullPrice()}`}</strong>
        </th>
        <th>
          <div style={{ display: "inline-block" }}>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
              style={{ display: "inline-block" }}
            >
              +
            </button>
            <h4 style={{ display: "inline-block", textAlign: "center" }}>
              {this.formatCount()}
            </h4>

            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
              style={{ display: "inline-block" }}
            >
              -
            </button>
          </div>
        </th>
      </tr>
    );
  }

  getStock() {
    return 12;
    // Work in progres...
    // let { stock } = this.props.counter;
    // console.log(`stock: ${stock}`);
    // return stock === 0 ? "Zero" : stock;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.quantity === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { quantity } = this.props.counter;
    return quantity === 0 ? "Zero" : quantity;
  }

  getName() {
    const { name } = this.props.counter;
    return name;
  }

  getPrice() {
    const { price } = this.props.counter;
    return +(Math.round(price + "e+2") + "e-2");
  }

  getFullPrice() {
    const full = this.props.counter.quantity * this.getPrice();
    return isNaN(full) === true ? "0" : full;
  }
}
export default Counter;
