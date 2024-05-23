import { Routes, Route } from "react-router-dom";
import Navbars from "./components/header";
import Home from "./pages/home";
import About from "./pages/rcka/about";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
