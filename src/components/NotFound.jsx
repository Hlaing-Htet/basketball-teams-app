import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>This page does not found</h1>
      <p>
        Go back to <Link to={"/"}>Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
