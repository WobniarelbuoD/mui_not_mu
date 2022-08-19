import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calc";
import Home from "./components/Home";
import TopBar from "./components/NavBar";
import './App.css';
import About from "./components/About";
import Footer from "./components/Footer";
import Adder from "./components/Adder";

function App() {
  const styles = {
    
  }
  return (
    
    <div className="App">
      <div style={{background:"linear-gradient(90deg, rgba(70,73,254,1) 0%, rgba(248,134,255,1) 100%)",width:"100vw",height:"100vh",position:"fixed",zIndex:-5}}></div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/adder" element={<Adder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
