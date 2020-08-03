import React from "react";

function ButtonLink(props) {
  return (
    <a className={props.className} href={props.href}>
      {/*children é padrão do react, passa o que você está definindo no corpo do component*/}
      {props.children}
    </a>
  );
}

export default ButtonLink;
