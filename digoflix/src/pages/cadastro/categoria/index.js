import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import FormButton from '../../../components/FormButton';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

const URL_BACK = 'http://localhost:6060/';

function CadastroCategoria() {
  const values = {
    titulo: '',
    link_extra_nome: '',
    link_extra_url: '',
    descricao: '',
    cor: '#ff0000',
  };
  // Utilizando set para edição de variável
  const [categorias, setCategorias] = useState([]);
  const [form, setForm] = useState(values);

  /** Seta os valores para o form */
  function setValue(key, value) {
    setForm({
      ...form,
      [key]: value,
    });
  }

  /** Salva o estado do form quando o usuário alterar o valor */
  function saveState(infosEvento) {
    // const { getAttribute, value } = infosEvento.target;
    // setValue(getAttribute("name"), value);
    setValue(infosEvento.target.getAttribute('name'), infosEvento.target.value);
  }

  /** Faz Submit do form */
  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();

    fetch(`${URL_BACK}categorias`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: form.titulo,
        link_extra: { text: form.link_extra_nome, url: form.link_extra_url },
        cor: form.cor,
        descricao: form.descricao,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setCategorias([...categorias, response]);

        // Limpando campos
        setForm(values);
      })
      .catch((err) => {
        console.log(err);
        alert('Ocorreu um erro inesperado!');
      });
  }

  // utilizando efeitos no react
  useEffect(() => {
    // pegando resposta do servidor e setando variavel de categoria
    fetch(`${URL_BACK}categorias`).then(async (response) => {
      const resp = await response.json();
      setCategorias([...resp]);
    });
  }, []);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#9e9e9e',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();

  return (
    <PageDefault>
      {/* <h1>Cadastro de Categoria</h1> */}
      <h1>
        Cadastro de Categoria:
        {' '}
        {form.titulo}
      </h1>
      <form onSubmit={handleSubmit}>
        <FormField
          name="titulo"
          label="Nome da Categoria:"
          value={form.titulo}
          // Função para salvar o estado - Pode ter qualquer nome
          onChange={saveState}
          required
        />
        <Box width="45%" display="inline-block" marginRight="1%">

          <FormField
            name="link_extra_nome"
            label="Link Extra - Nome:"
            value={form.link_extra_nome}
            onChange={saveState}
          />
        </Box>

        <Box width="54%" display="inline-block">
          <FormField
            name="link_extra_url"
            label="Link Extra - URL:"
            value={form.link_extra_url}
            onChange={saveState}
          />
        </Box>

        <FormField
          name="descricao"
          label="Descrição:"
          value={form.descricao}
          onChange={saveState}
          multiline
        />

        <FormField
          type="color"
          label="Cor:"
          value={form.cor}
          name="cor"
          onChange={saveState}
        />
        {/* Ordena o botão para o lado direito da tela */}
        <Box display="flex" justifyContent="flex-end">
          <FormButton value="Cadastrar" />
        </Box>
      </form>

      {/* Aparece se não existir categorias */}
      {/* {categorias.length > 0 && <CircularProgress />} */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nome</StyledTableCell>
              <StyledTableCell align="left">Link Extra- Nome</StyledTableCell>
              <StyledTableCell align="left">Descrição</StyledTableCell>
              <StyledTableCell align="center">Cor</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorias.map((row) => (
              <StyledTableRow key={row.titulo}>
                <StyledTableCell component="th" scope="row">
                  {row.titulo}
                </StyledTableCell>
                <StyledTableCell>{row.link_extra ? row.link_extra.text : ''}</StyledTableCell>
                <StyledTableCell>{row.descricao}</StyledTableCell>
                <StyledTableCell align="center">
                  <input
                    type="color"
                    label=""
                    value={row.cor}
                    disabled
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Link to="/">Ir para home</Link> */}
    </PageDefault>
  );
}

export default CadastroCategoria;
