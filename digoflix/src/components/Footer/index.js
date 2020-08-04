import React from "react";
import { FooterBase } from "./styles";
import rodape from "../../assets/img/rodape.png";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Rodape" src={rodape} alt="Digo's" />
      </a>
      <p>Esse site é destinado para o aprendizado do React </p>
    </FooterBase>
  );
}

export default Footer;
