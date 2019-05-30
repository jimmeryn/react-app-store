import React from "react";
import background from "../Images/background.png";

const Home = () => {
  return (
    <div>
      <img
        alt="homepage"
        src={background}
        style={{
          width: "100%",
          backgroundSize: "cover"
        }}
      />
    </div>
  );
};

export default Home;
