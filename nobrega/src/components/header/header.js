import './header.css'
import About from '../Pages/about/about';
import Contact from '../Pages/contact/contact';
import Photos from '../Pages/photos/photos';
import Home from '../Pages/home/home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

function Header(){
    return(
        <>
            <header>
                <h1>Fernanda Nobrega</h1>
                <Router>
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
            <Routes>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/photos">
                    <Photos/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Routes>
            </Router>

            </header>
        </>
    )
}
export default Header