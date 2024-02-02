import React, { useState } from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import './App.css';
import Navegacao from './Navegacao';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';
const App = () => {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, setPaginaSelecionada] = useState(0);

  return (
    <div>
      <img src={Hashtaurante} alt="" className="capa" />
      <Navegacao setPaginaSelecionada={setPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map(
          ({ nome, preco, descricao, imagem }) => (
            <ItemCardapio
              nome={nome}
              preco={preco}
              descricao={descricao}
              imagem={imagem}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default App;
