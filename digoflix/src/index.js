import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import CadastroVideo from "./pages/cadastro/video";
import CadastroCategoria from "./pages/cadastro/categoria";

//Desafio master blaster na descrição
const Pagina404 = () => <div>Página não encontrada: 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* exact  - Barra de ir para home caso o usuário digite uma url inexistente */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

//Esse arquivo é o root, aqui declaramos nosso APP e setamos as rotas pelo react-router-dom
