import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ScrollToTop from "./components/scrolltotop";
import Home from "./pages/home";
import About from "./pages/association/about";
import Committee from "./pages/association/committee";
import Archive from "./pages/association/archive";
import News from "./pages/news";
import Notice from "./pages/notice";
import Sponser from "./pages/sponser";

import Soccer from "./pages/games/soccer";
import Rescue from "./pages/games/rescue";
import CoSpace from "./pages/games/cospace";
import OnStage from "./pages/games/onstage";

import Footer from "./components/footer";
import "../src/assets/styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="header-padding"></div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/association/about" element={<About />} />
        <Route path="/association/committee" element={<Committee />} />
        <Route path="/association/archive" element={<Archive />} />

        <Route path="/games/soccer" element={<Soccer />} />
        <Route path="/games/rescue" element={<Rescue />} />
        <Route path="/games/cospace" element={<CoSpace />} />
        <Route path="/games/onstage" element={<OnStage />} />

        <Route path="/news" element={<News />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/sponser" element={<Sponser />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
