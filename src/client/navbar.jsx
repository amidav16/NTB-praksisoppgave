import React from "react";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({}) => {
  return (
    //https://getbootstrap.com/docs/4.0/components/navbar/
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">NTB</Navbar.Brand>
        <span className="hidden-xs text-muted">Hjem</span>
      </Navbar>
    </div>
  );
};

export default NavBar;
