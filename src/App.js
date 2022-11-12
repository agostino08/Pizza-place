import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './Home/Home.jsx';
import Menu from './Menu/Menu.jsx';
import Footer from './Footer/Footer.jsx';
import About from './About us/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
    </Routes>
    <Menu />
    <About />
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
