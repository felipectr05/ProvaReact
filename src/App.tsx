import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteSoftware } from "./routes";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Cadastro from './Cadastro';

function App() {
  return (
    <div>
      {/* Outros componentes ou conteúdos podem estar aqui */}
      <Cadastro />
    </div>
  );

  function App() {

  return (
    <>
        <BrowserRouter>
          <GlobalStyle/>
          <RouteSoftware/>
        </BrowserRouter>
    </>
  )
}
export default App
