import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

const Carro = () => {
  // Estados para armazenar os valores do formulário
  const [imagem, setImagem] = useState(null);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [usado, setUsado] = useState(false);
  const [ano, setAno] = useState("");
  const [preco, setPreco] = useState("");
  const [especificacoes, setEspecificacoes] = useState("");
  const [kilometragem, setKilometragem] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [combustivel, setCombustivel] = useState("gasolina");
  const [descricao, setDescricao] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("imagem", imagem);
    formData.append("marca", marca);
    formData.append("modelo", modelo);
    formData.append("cor", cor);
    formData.append("usado", usado);
    formData.append("ano", ano);
    formData.append("preco", preco);
    formData.append("especificacoes", especificacoes);
    formData.append("kilometragem", kilometragem);
    formData.append("cidade", cidade);
    formData.append("telefone", telefone);
    formData.append("combustivel", combustivel);
    formData.append("descricao", descricao);

    try {
      const response = await axios.post("http://localhost:8081/carro", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Veículo cadastrado com sucesso!");
      // Limpar os campos após o cadastro, se necessário
      // setImagem(null);
      // setMarca("");
      // ... outros estados

    } catch (error) {
      console.error("Erro ao cadastrar veículo", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li id="nav-perfil-vender">
            <Link to="/seuperfil">Perfil</Link>
          </li>
        </ul>
      </nav>

      <div className="car-form-container">
        <h1>Cadastre o seu carro</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="imagem">Imagem do Veículo:</label>
          <input
            type="file"
            id="imagem"
            name="imagem"
            accept="image/*"
            onChange={(e) => setImagem(e.target.files[0])}
            required
          />

          <label htmlFor="marca">Marca do Veículo:</label>
          <input type="text" id="marca" name="marca" onChange={(e) => setMarca(e.target.value)} required />

          <label htmlFor="modelo">Modelo:</label>
          <input type="text" id="modelo" name="modelo" onChange={(e) => setModelo(e.target.value)} required />

          <label htmlFor="cor">Cor:</label>
          <input type="text" id="cor" name="cor" onChange={(e) => setCor(e.target.value)} required />

          <label htmlFor="usado">Usado:</label>
          <input type="checkbox" id="usado" name="usado" onChange={(e) => setUsado(e.target.checked)} />

          <label htmlFor="ano">Ano do Veículo:</label>
          <input type="number" id="ano" name="ano" onChange={(e) => setAno(e.target.value)} required />

          <label htmlFor="preco">Preço:</label>
          <input type="text" id="preco" name="preco" onChange={(e) => setPreco(e.target.value)} required />

          <label htmlFor="especificacoes">Especificações (Motorização):</label>
          <textarea id="especificacoes" name="especificacoes" onChange={(e) => setEspecificacoes(e.target.value)}></textarea>

          <label htmlFor="kilometragem">Kilometragem:</label>
          <input type="text" id="kilometragem" name="kilometragem" onChange={(e) => setKilometragem(e.target.value)} required />

          <label htmlFor="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" onChange={(e) => setCidade(e.target.value)} required />

          <label htmlFor="telefone">Telefone do Vendedor:</label>
          <input type="tel" id="telefone" name="telefone" onChange={(e) => setTelefone(e.target.value)} required />

          <label htmlFor="combustivel">Combustível:</label>
          <select id="combustivel" name="combustivel" onChange={(e) => setCombustivel(e.target.value)} required>
            <option value="gasolina">Gasolina</option>
            <option value="etanol">Etanol</option>
            <option value="diesel">Diesel</option>
            <option value="flex">Flex</option>
            <option value="eletrico">Elétrico</option>
          </select>

          <label htmlFor="descricao">Descrição do Veículo:</label>
          <textarea id="descricao" name="descricao" onChange={(e) => setDescricao(e.target.value)}></textarea>

          <button id="btn-cadastro" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Carro;