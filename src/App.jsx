import React from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import './App.css';
import Navegacao from './Navegacao';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';
const App = () => {
  return (
    <div>
      <img src={Hashtaurante} alt="" className="capa" />
      <Navegacao />
      <div className="menu">
        {pratosPrincipais.map(({ nome, preco, descricao, imagem }) => (
          <ItemCardapio
            nome={nome}
            preco={preco}
            descricao={descricao}
            imagem={imagem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
