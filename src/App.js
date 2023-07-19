import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/contact';
import Home from './pages/home';
import  "./scss/style.scss";




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
