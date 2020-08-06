import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

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
  //Utilizando set para edição de variável
  const [categorias, setCategorias] = useState(["TesteArray"]);
  const [nomeDaCategoria, setNomeDaCategoria] = useState("");

  return (
    <PageDefault>
      {/* <h1>Cadastro de Categoria</h1> */}
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, nomeDaCategoria]);
        }}
      >
        <TextFieldWhite
          id="titulo"
          label="Nome da Categoria:"
          variant="outlined"
          autoComplete="off"
          value={nomeDaCategoria}
          //Função para salvar o estado - Pode ter qualquer nome
          onChange={function saveState(infosEvento) {
            setNomeDaCategoria(infosEvento.target.value);
          }}
          fullWidth
        />
        <TextFieldWhite
          id="link_extra"
          label="Link Extra:"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        Cor: <Input type="color" fullWidth />
        <ul>
          {categorias.map((categoria, indice) => {
            // return <li key={`${categoria}${indice}`}>{categoria}</li>; //É a mesma coisa
            return <li key={categoria + indice}>{categoria}</li>;
          })}
        </ul>
        <Button>cadastrar</Button>
        <Box display="flex" justifyContent="flex-end">
          <ButtonSucces variant="outlined" color="primary" type="submit">
            Cadastrar
          </ButtonSucces>
        </Box>
      </form>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
