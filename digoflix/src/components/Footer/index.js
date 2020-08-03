import React from "react";
import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <a href="https://pbs.twimg.com/profile_images/1066036074/motumbo_400x400.jpg">
        <img
          src="data:image/jpeg;base64,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"
          alt="Logo Bosta"
        />
      </a>
      <p>
        Esse site é destinado para o aprendizado do React{" "}
        <a href="https://pbs.twimg.com/profile_images/1066036074/motumbo_400x400.jpg">
          Imersão React - Chupicknévis
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
