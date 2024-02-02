import React from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import './App.css';
import Navegacao from './Navegacao';
import ItemCardapio from './ItemCardapio';

const App = () => {
  return (
    <div>
      <img src={Hashtaurante} alt="" className="capa" />
      <Navegacao />
      <ItemCardapio />
    </div>
  );
};

export default App;
