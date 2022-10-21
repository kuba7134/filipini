import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Parafia,
  Aktualnosci,
  Wspolnoty,
  Sakramenty,
  SingleNewsPage,
  Forms,
  Ogloszenia,
} from "./containers";
import { Footer, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
          <Route
            path="/aktualnosci/singlenewspage"
            element={<SingleNewsPage />}
          />
          <Route path="/ogloszenia" element={<Ogloszenia />} />
          <Route path="/nabozenstwa" />
          <Route path="/sakramenty" element={<Sakramenty />} />
          <Route path="/wspolnoty" element={<Wspolnoty />} />
          <Route path="/parafia" element={<Parafia />} />
          <Route path="/kontakt" />
          <Route path="/forms" element={<Forms />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
