import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <h1>Fernanda Nobrega</h1>
                <ul>
                    <li>
                        <Link to="/">Pagina Inicial</Link>
                    </li>
                    <li>
                        <Link to="about">Sobre Mim</Link>
                    </li>
                    <li>
                        <Link to="photos">Fotos</Link>
                    </li>
                    <li>
                        <Link to="contact">Orçamento</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
