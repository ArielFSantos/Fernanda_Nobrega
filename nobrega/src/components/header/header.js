import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <h1>Fernanda Nobrega</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About Me</Link>
                    </li>
                    <li>
                        <Link to="photos">Photos</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;
