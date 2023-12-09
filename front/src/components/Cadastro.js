import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Cadastro = () => {
  // Estados para armazenar os valores do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  // Função para lidar com o envio do formulário
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/cadastro', { nome, email, password, telefone })   
      .then(res => {
        alert("CONTA CRIADA COM SUCESSO!")
        navigate('/perfil');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/perfil">Login</Link>
          </li>
        </ul>
      </nav>

      <center>
        {/* Formulário de Cadastro */}
        <div className="login-box">
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit} action="">

            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"  // Use "tel" para campos de telefone
              id="telefone"
              name="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </center>
    </>
  );
};

export default Cadastro;