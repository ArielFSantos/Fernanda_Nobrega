import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/Pages/home/home";
import About from "./components/Pages/about/about";
import Contact from "./components/Pages/contact/contact";
import Photos from "./components/Pages/photos/photos";



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
      <Switch>
        <Route path="/">
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

      </Switch>
    </Router>



    <Home/>
    <Footer/>

    </>
  );
}

export default App;
