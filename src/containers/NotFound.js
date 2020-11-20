import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Welcome!</h1>
        <p className="text-muted">This is a React App with a user login system powered by AWS Cognito.<br></br>
        <a href="https://github.com/steven-liu48/react_ums" target="_blank">Check the Source Code ></a>
        {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
        {/* <a href="https://steven-liu48.github.io/home-page/" target="_blank">About the Author ></a> */}
        </p>
      </div>
    </div>
  );
}
