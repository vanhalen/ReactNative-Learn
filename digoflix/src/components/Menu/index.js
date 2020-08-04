import React from "react";
import Logo from "../../assets/img/logo.png";
import "./Menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";
// import ButtonLink from "./ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Digoflix" />
      </a>

      {/* as="a" o button vai se comportar como uma tag a */}
      {/* <Button as="a" className="ButtonLink" href="/cadastro/video"> */}
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
