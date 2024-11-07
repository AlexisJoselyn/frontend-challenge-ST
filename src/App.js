import "./App.scss";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Plans } from "./components/plans/Plans";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="app__content">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        </Routes>   
      </div>
      <Footer />
    </div>
  );
}

export default App;
