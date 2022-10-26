import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import {
  Homepage,
  Parafia,
  Aktualnosci,
  Wspolnoty,
  Sakramenty,
  SingleNewsPage,
  Forms,
  Ogloszenia,
  Nabozenstwa
} from "./containers";
import { Footer, Navbar } from "./components";
import ScrollToTop from "./ScrollToTop";

const App = () => {

  const kontaktRef = useRef(null)

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar kontaktRef={kontaktRef} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
          <Route
            path="/aktualnosci/:id"
            element={<SingleNewsPage />}
          />
          <Route path="/ogloszenia" element={<Ogloszenia />} />
          <Route path="/nabozenstwa" element={<Nabozenstwa />} />
          <Route path="/sakramenty" element={<Sakramenty />} />
          <Route path="/wspolnoty" element={<Wspolnoty />} />
          <Route path="/parafia" element={<Parafia />} />
          <Route path="/kontakt" />
          <Route path="/forms" element={<Forms />} />
        </Routes>
        <Footer ref={kontaktRef} />
      </Router>
    </div>
  );
};

export default App;
