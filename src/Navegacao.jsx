import React from 'react';

const Navegacao = ({ setPaginaSelecionada }) => {
  return (
    <div className="navegacao">
      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-0"
        onClick={() => setPaginaSelecionada(0)}
        defaultChecked
      />
      <label htmlFor="pagina-0">Pratos Principais</label>

      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-1"
        onClick={() => setPaginaSelecionada(1)}
      />
      <label htmlFor="pagina-1">Sobremesas</label>

      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-2"
        onClick={() => setPaginaSelecionada(2)}
      />
      <label htmlFor="pagina-2">Bebidas</label>
    </div>
  );
};

export default Navegacao;
