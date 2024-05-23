import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/association/about";
import Committee from "./pages/association/committee";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association/about" element={<About />} />
        <Route path="/association/committee" element={<Committee />} />
      </Routes>
    </div>
  );
}

export default App;
