import React from "react";
import Logo from "../../assets/img/logo.png";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Digoflix" />
      </a>
    </nav>
    // <html></html>
  );
}

export default Menu;
