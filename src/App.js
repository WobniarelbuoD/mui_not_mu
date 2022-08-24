import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calc";
import Home from "./components/Home";
import TopBar from "./components/NavBar";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Adder from "./components/Adder";
import Error from "./components/Error"  

function App() {
  return (
    <div className="App">
      <div style={{background:"linear-gradient(90deg, rgba(70,73,254,1) 0%, rgba(248,134,255,1) 100%)",width: "100vw",height: "100vh",position: "fixed",zIndex: -5,}}></div>
      <HashRouter>
        <TopBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/adder" element={<Adder />} />
            <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
