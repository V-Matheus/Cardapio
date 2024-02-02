import React from 'react';
import { enroladinhoMignon } from './cardapio';

const ItemCardapio = () => {
  return (
    <div className="container-item-cardapio">
      <div>
        <h2>{enroladinhoMignon.nome}</h2>
        <p>{enroladinhoMignon.preco}</p>
        <p>{enroladinhoMignon.descricao}</p>
      </div>
      <img src={enroladinhoMignon.imagem} alt="" />
    </div>
  );
};

export default ItemCardapio;
