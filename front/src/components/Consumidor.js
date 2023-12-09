import { Link } from "react-router-dom";

const Consumidor = () => {
    return(
        <>
        <nav className="navbar">
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            </ul>
        </nav>
        <h1>
            Ola Consumidor
        </h1>
        </>
    )
}

export default Consumidor