import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Perfil = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/login', { email, password })
      .then(res => {
        console.log(res);
        if (res.data === "Registro encontrado") {
          // Se o login foi bem-sucedido, navegue para a página desejada
          navigate('/home');
        } else {
          // Se o login não foi bem-sucedido, você pode exibir uma mensagem ou tomar outras ações aqui
          console.log('Login falhou');
        }
      })
      .catch(err => console.log(err));
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
      <center>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>

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

            <button type="submit">Login</button>
          </form>
        </div>
        <div className="container">
          <ul>
            <li>
              <Link id="cadastro" to="/cadastro">Não possui um cadastro? Clique aqui</Link>
            </li>
          </ul>
        </div>
      </center>
    </>
  );
};

export default Perfil;