import React, { Component } from "react";
import Counter from "./counter";
import LoadingButton from "./loadingButton";
import Search from "../Images/search1.png";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.state = {
      suggestions: [],
      isLoading: false,
      text: ""
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://my-json-server.typicode.com/jimmeryn/data/users")
      .then(res => res.json())
      .then(result => {
        this.items = result;
        this.setState({ isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  }

  onTextChange = e => {
    const names = this.items.map(e => e.name);
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0 && value.match(/[a-z]/i)) {
      const regex = new RegExp(`${value}`, "i");
      suggestions = names.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({
      suggestions,
      text: value
    }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul
        onMouseEnter={() => {
          document.body.style.cursor = "pointer";
        }}
        onMouseLeave={() => {
          document.body.style.cursor = "default";
        }}
      >
        {suggestions.map(item => (
          <p
            key={suggestions.indexOf(item)}
            onClick={() => this.suggestionSelected(item)}
          >
            {item}
          </p>
        ))}
      </ul>
    );
  };

  render() {
    const { text } = this.state;
    const {
      onReset,
      counters,
      onDelete,
      onDeleteAll,
      onIncrement,
      onDecrement,
      onSetName,
      onPrice,
      onAdd
    } = this.props;

    return (
      <div
        style={{
          textAlign: "left",
          marginLeft: "2%",
          marginRight: "2%",
          marginTop: "2%",
          marginDown: "2%"
        }}
      >
        <div>
          <img alt="Search icon" src={Search} />
          <div>
            <div className="AutoCompleteText">
              <input
                value={text}
                onChange={this.onTextChange}
                placeholder="Search..."
              />
              {this.renderSuggestions()}
            </div>
          </div>
        </div>
        <br />
        <button
          className="btn btn-primary btn-bg m-2"
          onClick={() =>
            onAdd(this.items.findIndex(e => e.name === this.state.text))
          }
        >
          Add new item to the list
        </button>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th style={{ maxWidth: "10%" }}>
                <h1>Shopping Cart</h1>
                <button
                  onClick={() => onDeleteAll()}
                  className="btn btn-danger btn-bg m-2"
                >
                  DeleteAll
                </button>
              </th>
              <th style={{ width: "20%" }}>
                <h3 style={{ marginRight: "100%" }}>Price</h3>
              </th>
              <th style={{ width: "20%" }}>
                <h3>Quantity</h3>
              </th>
            </tr>
            {(counters || []).map(counter => (
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetName={onSetName}
                counter={counter}
              />
            ))}
          </tbody>
        </table>
        <hr />

        <br />
        <h2>Cart subtotal: </h2>
        <strong
          style={{
            color: "red",
            fontSize: "20px"
          }}
        >
          {`$${onPrice()}`}
        </strong>
        <LoadingButton onClick={onReset} />
      </div>
    );
  }
}

export default Counters;
