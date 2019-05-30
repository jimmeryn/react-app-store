import React from "react";
import Img from "../Images/favicon.ico";
import Footer from "./footer";

const Error = () => {
  return (
    <div>
      <div
        id="error"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
        <p className="notFoundDesc">
          It looks like nothing was found at this location. Maybe try one of the
          links in the menu or press back to go to the previous page.
        </p>
        <img alt="Error icon" src={Img} />
      </div>
      <Footer />
    </div>
  );
};

export default Error;
