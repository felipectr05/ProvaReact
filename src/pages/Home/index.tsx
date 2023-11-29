import * as style from "../Home/styles"
import { ComponentCard } from "../../components"


export function Home() {
  return (
    <style.Main>
        <ComponentCard text="Receita com História"/>
        <ComponentCard text="Guia de Vinhos para Iniciantes"/>
        <ComponentCard text="Receita de Cozinha Internacional"/>
        <ComponentCard text="Dicas para Churrasco Perfeito"/>
    </style.Main>
  )
  // Cadastro.js

import React, { useState } from 'react';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça algo com os dados (por exemplo, envie para um servidor)
    console.log('Nome:', nome);
    console.log('Email:', email);
    // Limpar o formulário
    setNome('');
    setEmail('');
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;

}