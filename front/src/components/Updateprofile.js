import { Outlet, Link } from "react-router-dom";

const Updateprofile = () => {
    return(
        <>
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li class="btn-sair">
                    <Link to="/">Sair</Link>
                </li>
            </ul>
        </nav>
        <h1>
            Ola upd
        </h1>
        <Outlet />
        </>
    )
}

export default Updateprofile