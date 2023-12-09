import './App.css';
import Home from './components/Home';
import Comprar from './components/Comprar';
import Vender from './components/Carro';
import Perfil from './components/Perfil';
import Carro from './components/Carro';
import Cadastro from './components/Cadastro';
import Homewprofile from './components/Homewprofile'; 
import Updateprofile from './components/Updateprofile';
import OpcaoVender from './components/OpcaoVender'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Consumidor from './components/Consumidor';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="carro-moto" element={<OpcaoVender/>}/>
          <Route path="home" element={<Homewprofile/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="comprar" element={<Comprar/>} /> 
          <Route path="perfil" element={<Perfil/>} /> 
          <Route path="carro" element={<Carro/>}/>
          <Route path="consumidor" element={<Consumidor/>}/>
          <Route path="cadastro" element={<Cadastro/>}/>
          <Route path="seuperfil" element={<Updateprofile/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
