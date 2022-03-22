import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import StartPage from "./Page/StartPage/StartPage";
import NoticePage from "./Page/NoticePage";
import { GlobalStyle } from "./Style/GrobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/notice" element={<NoticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
