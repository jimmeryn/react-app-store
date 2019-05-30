import React from "react";

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class LoadingButton extends React.Component {
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
          textDecorationLine: "none",
          width: "25%",
          position: "absolute",
          alignSelf: "righ"
        }}
        href="/purchase"
      >
        {isLoading ? "Loading…" : "Proceed to checkout"}
      </button>
    );
  }
}

export default LoadingButton;
