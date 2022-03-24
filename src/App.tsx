import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Style/GrobalStyle";
import HomePage from "./Page/HomePage/HomePage";
import StartPage from "./Page/StartPage/StartPage";
import NoticePage from "./Page/NoticePage";
<<<<<<< HEAD
import SignUp from "./Components/SignUp/SignUp";
=======
import { GlobalStyle } from "./Style/GrobalStyle";
import LoginPage from "./Page/LoginPage";
>>>>>>> b8e6b72c0707a1c66c78fbb9f5c990136d673228

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/notice" element={<NoticePage />} />
<<<<<<< HEAD
        <Route path="/signup" element={<SignUp />} />
=======
        <Route path="/login" element={<LoginPage />} />
>>>>>>> b8e6b72c0707a1c66c78fbb9f5c990136d673228
      </Routes>
    </BrowserRouter>
  );
}

export default App;
