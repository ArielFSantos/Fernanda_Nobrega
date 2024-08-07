import './header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <h1>Fernanda Nóbrega</h1>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" className="nav-link" onClick={toggleMenu}>Página Inicial</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" onClick={toggleMenu}>Sobre Mim</Link>
                        </li>
                        <li>
                            <Link to="/photos" className="nav-link" onClick={toggleMenu}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Orçamento</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
