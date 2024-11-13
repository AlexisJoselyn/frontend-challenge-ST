import React from "react";
import "./App.scss";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Plans } from "./components/plans/Plans";
import { Summary } from "./components/summary/Summary";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <UserProvider>
      <div className="App">
        <div className={`app__content ${isHome ? "with-footer" : "without-footer"}`}>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/resumen" element={<Summary/>} />
          </Routes>   
        </div>
        {isHome && <Footer />}
      </div>
    </UserProvider>
  );
}

export default App;
