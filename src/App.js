import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Error from "./components/error";
import Home from "./components/home";
import Footer from "./components/footer";
import Account from "./components/account";
import Cart from "./Images/shopping-cart-sm.png";

class App extends Component {
  constructor(props) {
    super(props);
    document.body.style = "background: white";

    this.state = {
      counters: [],
      dataApi: [],
      isLoaded: false
    };
  }

  fetchData = page => {
    fetch(page)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ dataApi: result, isLoaded: true });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  componentDidMount() {
    this.fetchData("https://my-json-server.typicode.com/jimmeryn/data/users");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].quantity++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].quantity > 0) {
      counters[index] = { ...counter };
      counters[index].quantity--;
      this.setState({ counters });
    } else alert(`Quantity of ${counters[index].name} is already zero!`);
  };

  handleDelete = counterId => {
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleDeleteAll = () => {
    this.setState({ counters: [] });
  };

  handleAddNewItem = dataKey => {
    dataKey = parseInt(dataKey);
    if (this.state.dataApi.find(e => e.key === dataKey)) {
      const index = this.state.counters.length + 1;
      let newObject = this.state.dataApi.find(x => x.key === dataKey);
      const counters = [
        ...this.state.counters,
        {
          id: index,
          quantity: 1,
          name: newObject.name,
          price: newObject.price
        }
      ];
      this.setState({ counters: counters });
    } else {
      console.log(`There is no such product with given key: ${dataKey}`);
      throw new Error();
    }
  };

  handleSummAll = () =>
    this.state.counters
      .map(e => e.price * e.quantity)
      .reduce((a, b) => a + b, 0);

  AddButton = () => {
    return (
      <button
        className="btn btn-warning btn-lg btn-block  m-2"
        variant="primary"
        style={{
          width: "25%"
        }}
        onClick={this.handleAddNewItem(1)}
      >
        <img alt="cartImg" src={Cart} />
        Add
      </button>
    );
  };

  CartList = () => {
    return (
      <React.Fragment>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onDeleteAll={this.handleDeleteAll}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onSetName={this.handleSetName}
            onPrice={this.handleSummAll}
            onAdd={this.handleAddNewItem}
          />
        </main>
      </React.Fragment>
    );
  };

  render() {
    const { error, isLoaded } = this.state;
    if (error) return <div>Error: {error.message}</div>;
    else if (isLoaded === false) return <div>Loading...</div>;
    else
      return (
        <BrowserRouter>
          <div>
            <NavBar
              totalCounters={
                this.state.counters.filter(c => c.quantity > 0).length
              }
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={this.CartList} />
              <Route path="/account" component={Account} />
              <Route component={Error} />
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
