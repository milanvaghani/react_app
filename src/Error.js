import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {

  return (
    
    <>
      <div className="mydiv">
      <h1> 404 Error Page</h1>
      <p>Sorry, This Page Doesn't Exist.</p>
      <NavLink to="/">Go Back</NavLink>
      </div>
    </>
  );
};

export default Error;
