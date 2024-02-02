import React from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import './App.css';
import Navegacao from './Navegacao';

const App = () => {
  return (
    <div>
      <img src={Hashtaurante} alt="" className="capa" />
      <Navegacao />
    </div>
  );
};

export default App;
