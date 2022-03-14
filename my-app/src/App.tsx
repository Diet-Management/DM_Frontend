import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cursor from './Cursor';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cursor/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
