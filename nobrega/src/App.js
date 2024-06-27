import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/Pages/about/about";
import Contact from "./components/Pages/contact/contact";
import Photos from "./components/Pages/photos/photos";
import Home from "./components/Pages/home/home";
import {BrowserRouter as Router, Route, Switch, Link, Routes} from 'react-router-dom'



function App() {

  return (
    <>
    <Header/>
    <Switch>
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
    </Switch>
    <Footer/>

    </>
  );
}

export default App;
