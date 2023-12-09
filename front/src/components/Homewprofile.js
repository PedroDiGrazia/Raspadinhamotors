import { Outlet, Link } from "react-router-dom";


const Homewprofile = () => {
    return (
        <>
          <nav class="navbar">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li class="nav-center">
                <Link to="/comprar">Comprar</Link>
                <Link to="/carro-moto">Vender</Link>
              </li>
              <li id="nav-perfil">
                <Link to="/seuperfil">Perfil</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
};

export default Homewprofile;