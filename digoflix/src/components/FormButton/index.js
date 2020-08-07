import React from "react";
import { Button, withStyles } from "@material-ui/core";

const ButtonSucces = withStyles({
  root: {
    // #009422
    borderColor: "#fff",
    color: "#fff",
    //Atrasa o efeito do botão
    transition: "0.3s",
    "&  MuiButton-outlined": {
      color: "#fff",
    },
    "&:hover": {
      color: "#009422",
      borderColor: "#009422",
    },
  },
})(Button);

function FormButton(props) {
  return (
    <ButtonSucces variant="outlined" color="primary" type="submit">
      {props.value}
    </ButtonSucces>
  );
}

export default FormButton;
