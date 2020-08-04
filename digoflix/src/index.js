import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import CadastroVideo from "./pages/cadastro/video";

//Desafio master blaster na descrição
const Pagina404 = () => <div>Página não encontrada: 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* exact  - Barra de ir para home caso o usuário digite uma url inexistente */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

//Esse arquivo é o root, aqui declaramos nosso APP e setamos as rotas pelo react-router-dom
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
