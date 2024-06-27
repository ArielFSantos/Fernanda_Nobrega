import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function App() {

  return (
    <>
    <Header/>
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
    </Router>



    <Home/>
    <Footer/>

    </>
  );
}

export default App;
