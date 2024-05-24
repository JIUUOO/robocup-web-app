import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/association/about";
import Committee from "./pages/association/committee";
import Archive from "./pages/association/archive";
import Footer from "./components/footer";
import "../src/assets/styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="header-padding"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association/about" element={<About />} />
        <Route path="/association/committee" element={<Committee />} />
        <Route path="/association/archive" element={<Archive />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
