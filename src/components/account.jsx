import React from "react";

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class LoadingButton2 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <button
        className="btn btn-warning btn-lg btn-block  m-2"
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
        style={{
          color: "white",
          textDecorationLine: "none"
        }}
        href="/account"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
    );
  }
}

const Account = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10%",
        marginLeft: "38%",
        width: "25%"
      }}
    >
      <h1>Sing in</h1>
      <strong style={{ margin: "1%" }}>
        Email (phone for mobile accounts)
      </strong>
      <input type="email" />
      <div style={{ margin: "1%" }}>
        <strong> Password </strong>
        <a href="/account" style={{ position: "right" }}>
          Forgot your password?
        </a>
      </div>
      <input type="password" />
      <LoadingButton2 />
      <div>
        By continuing, you agree to Noones's{" "}
        <a href="/account">Conditions of Use</a> and{" "}
        <a href="/account">Privacy Notice</a>.
      </div>
      <div>
        <input
          style={{
            marginRight: "6px",
            marginLeft: "6px",
            marginTop: "5px"
          }}
          type="checkbox"
        />
        Keep me signed in. <a href="/account">Details</a>
        <hr
          style={{
            display: "block",
            marginTop: "0.5em",
            marginBottom: "0.5em",
            marginLeft: "auto",
            marginRight: "auto",
            borderStyle: "inset",
            borderWidth: "1px"
          }}
        />
      </div>
    </div>
  );
};

export default Account;
