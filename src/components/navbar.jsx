import React from "react";
// import Home from "../Images/home.png";
import Cart from "../Images/shopping-cart.png";
import Home from "../Images/background-icon.png";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <a href="/" className="navbar-brand">
        <img alt="Home icon" src={Home} />
        {/* <em> ReactApp</em> */}
      </a>

      <button
        className="navbar-toggler btn-bg btn-outline-light"
        style={{
          marginTop: ".5%",
          padding: "5px"
        }}
      >
        <a
          href="https://my-json-server.typicode.com/jimmeryn/data/users"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            textDecorationLine: "none"
          }}
        >
          Data Base
        </a>
      </button>

      <button
        className="navbar-toggler btn-bg btn-outline-light"
        style={{
          marginTop: ".5%",
          padding: "5px"
        }}
      >
        <a
          href="/account"
          style={{
            color: "black",
            textDecorationLine: "none"
          }}
        >
          Sign in
        </a>
      </button>

      <a className="navbar-brand" href="cart">
        <img alt="Cart icon" src={Cart} />{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
