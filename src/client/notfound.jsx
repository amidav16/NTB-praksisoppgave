import React from "react";
import { Link } from "react-router-dom";

// can add a homepage redirect button
const NotFound = () => {
  return (
    <div>
      <h1>Page not Found. 404</h1>
      <Link to="/home">Go back</Link>
    </div>
  );
};

export default NotFound;
