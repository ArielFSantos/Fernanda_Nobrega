import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/Pages/about/about";
import Contact from "./components/Pages/contact/contact";
import Photos from "./components/Pages/photos/photos";
import Home from "./components/Pages/home/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return ( 
      <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="photos" element={<Photos />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
      </Router>
  );
}

export default App;

