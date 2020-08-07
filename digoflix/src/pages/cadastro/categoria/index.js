import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import FormField from "../../../components/FormField";
import FormButton from "../../../components/FormButton";

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
        <FormField
          name="titulo"
          label="Nome da Categoria:"
          value={form.titulo}
          //Função para salvar o estado - Pode ter qualquer nome
          onChange={saveState}
        />
        <FormField
          name="link_extra"
          label="Link Extra:"
          value={form.link_extra}
          onChange={saveState}
        />
        Cor:{" "}
        {/* <Input type="color" value={form.cor} name="cor" onChange={saveState} fullWidth /> */}
        <input type="color" value={form.cor} name="cor" onChange={saveState} />
        <ul>
          {categorias.map((categoria, indice) => {
            // return <li key={`${categoria}${indice}`}>{categoria}</li>; //É a mesma coisa
            return <li key={categoria + indice}>{categoria.titulo}</li>;
          })}
        </ul>
        {/* Ordena o botão para o lado direito da tela */}
        <Box display="flex" justifyContent="flex-end">
          <FormButton value="Cadastrar" />
        </Box>
      </form>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
