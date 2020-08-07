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
  const values = {
    titulo: "",
    link_extra: "",
    cor: "#ff0000",
  };
  //Utilizando set para edição de variável
  const [categorias, setCategorias] = useState(["TesteArray"]);
  const [form, setForm] = useState(values);

  /**Seta os valores para o form */
  function setValue(key, value) {
    setForm({
      ...form,
      [key]: value,
    });
  }

  /** Salva o estado do form quando o usuário alterar o valor*/
  function saveState(infosEvento) {
    // const { getAttribute, value } = infosEvento.target;
    // setValue(getAttribute("name"), value);
    setValue(infosEvento.target.getAttribute("name"), infosEvento.target.value);
  }

  /** Faz Submit do form */
  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setCategorias([...categorias, form]);
    setValue({ values });
  }

  return (
    <PageDefault>
      {/* <h1>Cadastro de Categoria</h1> */}
      <h1>Cadastro de Categoria: {form.titulo}</h1>
      <form onSubmit={handleSubmit}>
        <TextFieldWhite
          label="Nome da Categoria:"
          variant="outlined"
          autoComplete="off"
          value={form.titulo}
          name="titulo"
          //Função para salvar o estado - Pode ter qualquer nome
          onChange={saveState}
          fullWidth
        />
        <TextFieldWhite
          id="link_extra"
          label="Link Extra:"
          value={form.link_extra}
          variant="outlined"
          autoComplete="off"
          name="link_extra"
          onChange={saveState}
          fullWidth
        />
        Cor:{" "}
        <Input
          type="color"
          value={form.cor}
          name="cor"
          onChange={saveState}
          fullWidth
        />
        <ul>
          {categorias.map((categoria, indice) => {
            // return <li key={`${categoria}${indice}`}>{categoria}</li>; //É a mesma coisa
            return <li key={categoria + indice}>{categoria.titulo}</li>;
          })}
        </ul>
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
