import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

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

const ButtonSucces = withStyles({
  root: {
    // #009422
    borderColor: "#fff",
    color: "#fff",
    "&  MuiButton-outlined": {
      color: "#fff",
    },
    "&:hover": {
      color: "#009422",
      borderColor: "#fff",
    },
  },
})(Button);

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <form>
        <TextFieldWhite
          id="titulo"
          label="Nome da Categoria:"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextFieldWhite
          id="link_extra"
          label="Link Extra:"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />

        <Box display="flex" justifyContent="flex-end">
          <ButtonSucces variant="outlined" color="primary" disableRipple>
            Cadastrar
          </ButtonSucces>
        </Box>
      </form>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
