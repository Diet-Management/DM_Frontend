import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Style/GrobalStyle";
import HomePage from "./Page/HomePage/HomePage";
import StartPage from "./Page/StartPage/StartPage";
import NoticePage from "./Page/NoticePage";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<NoticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
