import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Comprar	 from './components/Comprar';
import Vender from './components/Vender';
import Perfil from './components/Perfil';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="comprar" element={<Comprar/>} /> 
          <Route path="vender" element={<Vender/>} /> 
          <Route path="perfil" element={<Perfil/>} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
