import React from "react";
import { TextField, withStyles } from "@material-ui/core";

const TextFieldWhite = withStyles({
  root: {
    background: "#292626",
    borderColor: "#f1f1f1",
    marginBottom: "1rem",
    color: "#f1f1f1",

    //Label do form
    "& .MuiFormLabel-root": {
      color: "#f1f1f1",
      borderColor: "#f1f1f1",
    },
    //Cor do Texto
    "& input": {
      color: "#f1f1f1",
    },

    "& .MuiOutlinedInput-root": {
      //Aqui é a borda do campo
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

function FormField(props) {
  return (
    <TextFieldWhite
      label={props.label}
      variant="outlined"
      autoComplete="off"
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      fullWidth
    />
  );
}
export default FormField;
