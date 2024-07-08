// src/components/Header.js
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
                <h1>Fernanda Nobrega</h1>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleMenu}>Pagina Inicial</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleMenu}>Sobre Mim</Link>
                        </li>
                        <li>
                            <Link to="/photos" onClick={toggleMenu}>Portifolio</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={toggleMenu}>Orçamento</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
