import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Homepage,
  Parafia,
  Aktualnosci,
  Wspolnoty,
  Sakramenty,
  SingleNewsPage,
  Forms,
  Ogloszenia,
  Nabozenstwa,
  Login,
  Kongregacja
} from "./containers";
import { Footer, Navbar } from "./components";
import ScrollToTop from "./ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {


  const location = useLocation()
  const kontaktRef = useRef(null)

  return (
    <>
      <ScrollToTop />
      <Navbar kontaktRef={kontaktRef} />
      <AuthProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
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
            <Route path="/login" element={<Login />} />
            <Route path="/kongregacja" element={<Kongregacja />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
      <Footer ref={kontaktRef} />
    </>
  );
};

export default App;
