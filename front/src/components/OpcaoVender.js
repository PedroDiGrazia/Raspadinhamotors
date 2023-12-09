import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Perfil = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const navigate = useNavigate();

  const handleEnviarClick = () => {
    if (opcaoSelecionada) {
      switch (opcaoSelecionada) {
        case 'carro':
          navigate("/carro");
          break;
        case 'moto':
          alert('Você selecionou a opção CONSUMIDOR');
          // Redirecionar para a página desejada para 'moto'
          navigate("/consumidor");
          break;
      }
    }
    else{
        alert('Escolha uma opção antes de enviar!');
    }
  };

  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <div id="pagina-perfil">
        <center>
          <div className="custom-container">
            <h2 className="custom-title">Escolha o tipo de veiculo</h2>
            <form>
              <label className="custom-label">
                <input
                  id="carro"
                  type="radio"
                  name="papel"
                  value="carro"
                  className="custom-radio"
                  onChange={handleOpcaoChange}
                />
                Carro
              </label>

              <label className="custom-label">
                <input
                  id="moto"
                  type="radio"
                  name="papel"
                  value="moto"
                  className="custom-radio"
                  onChange={handleOpcaoChange}
                />
                Moto
              </label>
            </form>

            <button type="button" id="submitButton" onClick={handleEnviarClick}>
              Enviar
            </button>
            <p id="resultado"></p>
          </div>
        </center>
      </div>
    </>
  );
};

export default Perfil;