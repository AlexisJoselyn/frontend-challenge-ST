import React from "react";
import "./App.scss";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Plans } from "./components/plans/Plans";
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
          <Route path="/plans" element={<Plans />} />
          </Routes>   
        </div>
        {isHome && <Footer />}
      </div>
    </UserProvider>
  );
}

export default App;
