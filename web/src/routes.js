import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Sidebar from "./components/sidebar";
import Cadastro from "./pages/cadastro";
import Checkout from "./pages/checkout";
import Petshop from "./pages/petshop";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petshop/:id" element={<Petshop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
      <Sidebar />
    </>
  );
};

export default App;
