import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/association/about";
import Committee from "./pages/association/committee";
import Footer from "./components/footer";
import "../src/assets/styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="header-padding"></div>
      <Routes>
        <Route path="/robocup-web-app/" element={<Home />} />
        <Route path="/robocup-web-app/association/about" element={<About />} />
        <Route
          path="/robocup-web-app/association/committee"
          element={<Committee />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
